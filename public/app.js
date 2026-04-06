const API_URL = '/api';

// Utility to get auth token
function getAuthToken() {
    return localStorage.getItem('shopnest_token');
}

// Global Auth State
let currentUser = null;

// On load, parse user
try {
    const usrStr = localStorage.getItem('shopnest_user');
    if (usrStr) {
        currentUser = JSON.parse(usrStr);
    }
} catch(e) {}

// --- LOGIC FOR LOGIN & REGISTER ---

function initApp() {
    // Login Form Submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            try {
                const res = await fetch(`${API_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                
                if (!res.ok) throw new Error(data.msg || 'Login failed');
                
                localStorage.setItem('shopnest_token', data.token);
                localStorage.setItem('shopnest_user', JSON.stringify(data.user));
                
                showToast && showToast('Login successful!');
                setTimeout(() => window.location.href = 'account.html', 1000);
            } catch (err) {
                if (window.showToast) showToast(err.message);
                else alert(err.message);
            }
        });
    }
    
    // Register Form Submit
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirm = document.getElementById('regConfirmPassword').value;
            
            if (password !== confirm) {
                return alert("Passwords do not match");
            }
            
            try {
                const res = await fetch(`${API_URL}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });
                const data = await res.json();
                
                if (!res.ok) throw new Error(data.msg || 'Registration failed');
                
                localStorage.setItem('shopnest_token', data.token);
                localStorage.setItem('shopnest_user', JSON.stringify(data.user));
                
                showToast && showToast('Registration successful!');
                window.location.href = 'account.html';
            } catch (err) {
                if (window.showToast) showToast(err.message);
                else alert(err.message);
            }
        });
    }

    // Checkout Form Submit
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
        
        // Render simple summary from localStorage
        const ci = document.getElementById('checkoutItems');
        const ct = document.getElementById('checkoutTotal');
        const storedCart = JSON.parse(localStorage.getItem('cCart')) || [];
        
        if (ci) {
            ci.innerHTML = '';
            let t = 0;
            storedCart.forEach(item => {
                ci.innerHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem; color:var(--white-muted);"><span>${item.qty}x ${item.name}</span><span>$${(item.price*item.qty).toFixed(2)}</span></div>`;
                t += item.price * item.qty;
            });
            if (ct) ct.innerText = "$" + t.toFixed(2);
        }
    }

    // Load Dashboard Setup
    if (document.getElementById('accName')) {
        loadDashboard();
    }

    // Load Wishlist Setup
    if (document.getElementById('wishlistGrid')) {
        loadWishlist();
    }
    
    // Toggle show password
    const showPwd = document.getElementById('showPwd');
    if(showPwd) {
        showPwd.addEventListener('change', function() {
            const pwdFields = document.querySelectorAll('#loginPassword, #regPassword, #regConfirmPassword');
            pwdFields.forEach(f => {
                if(f) f.type = this.checked ? 'text' : 'password';
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}


// --- LOGIC FOR WISHLIST ---

async function loadWishlist() {
    const token = getAuthToken();
    if (!token) return window.location.href = 'login.html';

    try {
        const res = await fetch(`${API_URL}/wishlist`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Could not fetch wishlist");
        const wishlistIds = await res.json();
        
        // Update local wishlist state and badge
        if (typeof wishlist !== 'undefined') {
            wishlist = wishlistIds;
            localStorage.setItem('cWish', JSON.stringify(wishlist));
            if (typeof renderWishlistBadge === 'function') renderWishlistBadge();
        }

        const grid = document.getElementById('wishlistGrid');
        if (!grid) return;

        if (wishlistIds.length === 0) {
            grid.innerHTML = '<p style="color:var(--white-muted); grid-column:1/-1; text-align:center; padding:40px 0;">Your wishlist is empty. <a href="index.html" style="color:var(--gold);">Explore products</a></p>';
            return;
        }

        // Look up product details from the PRODS array in script.js
        if (typeof PRODS === 'undefined') {
            console.error("PRODS data not found");
            return;
        }

        const wishlistProducts = PRODS.filter(p => wishlistIds.includes(String(p.id)));
        
        if (typeof card === 'function') {
            grid.innerHTML = wishlistProducts.map(p => {
                // Manually mark as wishlisted for the card UI
                const html = card(p);
                return html.replace('p-wish', 'p-wish wishlisted').replace('fill="none"', 'fill="currentColor"').replace('stroke="currentColor"', 'stroke="var(--red)"');
            }).join('');
        } else {
            grid.innerHTML = wishlistProducts.map(p => `
                <div class="pcard">
                    <div class="pi-wrap">
                        <img src="${p.img}" class="pi">
                        <div class="p-qa" onclick="addByProd(${p.id})">+ Add to Cart</div>
                    </div>
                    <div class="pinfo">
                        <div class="pnm">${p.name}</div>
                        <div class="ppr"><span class="pnow">$${p.price.toLocaleString()}.00</span></div>
                    </div>
                </div>
            `).join('');
        }
    } catch (err) {
        console.error(err);
    }
}

window.toggleWishlistAPI = async function(productId) {
    const token = getAuthToken();
    if (!token) {
        showToast && showToast("Please login to save items.");
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }

    try {
        const res = await fetch(`${API_URL}/wishlist/toggle/${encodeURIComponent(productId)}`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!res.ok) {
            if(res.status === 401) {
                localStorage.removeItem('shopnest_token');
                window.location.href = 'login.html';
            }
            throw new Error('Failed to toggle wishlist');
        }
        
        const wishlistArr = await res.json();
        // Update local state and badge
        if (typeof wishlist !== 'undefined') {
            wishlist = wishlistArr;
            localStorage.setItem('cWish', JSON.stringify(wishlist));
            if (typeof renderWishlistBadge === 'function') renderWishlistBadge();
        }

        // If we are on wishlist.html, reload to reflect changes
        if (document.getElementById('wishlistGrid')) {
           window.location.reload();
        }
    } catch (err) {
        console.error(err);
    }
}

// Global togWl for detail page buttons
window.togWl = function(btn) {
    if(!curProd) return;
    window.toggleWishlistAPI(curProd.id);
    
    // Toggle active UI state class
    btn.classList.toggle('active-wl');
    if(btn.classList.contains('active-wl')) {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--red);"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>';
    } else {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>';
    }
};

// --- LOGIC FOR CHECKOUT ---

window.showPaymentNote = function() {
    const pmInput = document.getElementById('chkPaymentMethod');
    if (!pmInput) return;
    
    const pm = pmInput.value;
    const note = document.getElementById('paymentNote');
    const title = document.getElementById('pnTitle');
    const desc = document.getElementById('pnDesc');
    const upload = document.getElementById('screenshotUpload');
    
    if (pm === 'COD') {
        if(note) note.style.display = 'none';
        if(upload) upload.style.display = 'none';
    } else {
        if(note) note.style.display = 'block';
        if(upload) upload.style.display = 'block';
        
        // Force override any existing static HTML content
        if (pm === 'Easypaisa') {
            if(title) title.innerText = 'Easypaisa Details';
            if(desc) desc.innerHTML = `<strong>Number:</strong> 03362296112<br><strong>Name:</strong> Muhammad Raza<br><span style="font-size:0.7rem; color:var(--white-muted);">Please upload screenshot after transfer.</span>`;
        } else if (pm === 'BankTransfer') {
            if(title) title.innerText = 'Bank Transfer Details';
            if(desc) desc.innerHTML = `<strong>Bank:</strong> Bank AL Habib<br><strong>Account Title:</strong> Syed Muhammad Raza<br><strong>Account No:</strong> 10870095011991018<br><span style="font-size:0.7rem; color:var(--white-muted);">Please upload screenshot after transfer.</span>`;
        }
    }
}

// Attach event listener for payment method change
document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'chkPaymentMethod') {
        window.showPaymentNote();
    }
});

// Run immediately and periodically to catch any dynamic content changes
function forcePaymentRefresh() {
    if (document.getElementById('chkPaymentMethod')) {
        window.showPaymentNote();
    }
}
setInterval(forcePaymentRefresh, 1000);
setTimeout(forcePaymentRefresh, 100);
setTimeout(forcePaymentRefresh, 500);
setTimeout(forcePaymentRefresh, 2000);

async function handleCheckout(e) {
    e.preventDefault();
    const token = getAuthToken();
    if (!token) {
        alert('You must be logged in to checkout. Redirecting...');
        return window.location.href = 'login.html';
    }

    if (typeof cart === 'undefined' || cart.length === 0) {
        return alert("Your cart is empty");
    }

    const shippingDetails = {
        fullName: document.getElementById('chkName').value,
        phone: document.getElementById('chkPhone').value,
        city: document.getElementById('chkCity').value,
        streetAddress: document.getElementById('chkAddress').value
    };

    const paymentMethod = document.getElementById('chkPaymentMethod').value;
    
    // Convert screenshot to base64 if exists
    let screenshotBase64 = null;
    const screenshotInput = document.getElementById('chkScreenshot');
    if (screenshotInput && screenshotInput.files && screenshotInput.files[0]) {
        const file = screenshotInput.files[0];
        screenshotBase64 = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });
    }
    
    const items = cart.map(i => ({
        name: i.name,
        price: i.price,
        quantity: i.qty,
        color: i.col || 'Standard',
        size: i.sz || 'One Size',
        image: i.img
    }));
    
    let totalAmount = items.reduce((acc, obj) => acc + (obj.price * obj.quantity), 0);

    // Show processing state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loader"></span> Processing Payment...';

    try {
        // Simulate a small delay for "Processing"
        await new Promise(resolve => setTimeout(resolve, 2000));

        /*
          Adding JWT token via the "Authorization" header.
          This ensures the checkout is securely tied to the authenticated user's account
          and their shipping details are protected.
        */
        const res = await fetch(`${API_URL}/orders/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ items, totalAmount, shippingDetails, paymentMethod, screenshot: screenshotBase64 })
        });
        
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.msg || 'Checkout failed');
        }
        
        // Clear Frontend Cart 
        if (typeof cart !== 'undefined') {
            cart = [];
            if (typeof renderCart === 'function') renderCart();
        }
        localStorage.removeItem('cCart');
        
        // Redirect to success page
        window.location.href = 'success.html';
    } catch (err) {
        console.error(err);
        alert(`Order Error: ${err.message}`);
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
    }
}

// Check for admin link in footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.ft-leg');
    if (footer) {
        const adminLink = document.createElement('a');
        adminLink.href = 'admin-login.html';
        adminLink.textContent = 'Admin Panel';
        adminLink.style.marginLeft = '15px';
        footer.appendChild(adminLink);
    }
});


// --- LOGIC FOR USER DASHBOARD ---

async function loadDashboard() {
    const token = getAuthToken();
    if (!token) return window.location.href = 'login.html';

    // 1. Fetch Profile
    try {
        const resProfile = await fetch(`${API_URL}/user/profile`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!resProfile.ok) throw new Error("Could not fetch profile");
        const profile = await resProfile.json();
        
        document.getElementById('accName').innerText = profile.name;
        document.getElementById('accEmail').innerText = profile.email;
    } catch(err) {
        console.error(err);
    }

    // 1.5 Render current cart in dashboard from localStorage
    const dashCart = document.getElementById('dashboardCart');
    const dashCartList = document.getElementById('dashCartList');
    const dashStoredCart = JSON.parse(localStorage.getItem('cCart')) || [];
    
    if (dashCart && dashCartList && dashStoredCart.length > 0) {
        dashCart.style.display = 'block';
        dashCartList.innerHTML = '';
        dashStoredCart.forEach(item => {
            dashCartList.innerHTML += `
              <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.9rem; border-bottom:1px solid var(--dark-4); padding-bottom:10px;">
                <div style="display:flex; gap:15px; align-items:center;">
                  <img src="${item.img}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;" onerror="this.src='https://via.placeholder.com/40'">
                  <div>
                    <strong>${item.name}</strong><br>
                    <span style="color:var(--white-muted); font-size:0.75rem;">Qty: ${item.qty}</span>
                  </div>
                </div>
                <span style="color:var(--gold); font-weight:600;">$${(item.price * item.qty).toFixed(2)}</span>
              </div>
            `;
        });
    }
    
    // 2. Fetch Orders
    try {
        const resOrders = await fetch(`${API_URL}/orders/my-orders`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const tbody = document.getElementById('orderHistoryBody');
        if (!resOrders.ok) {
            tbody.innerHTML = '<tr><td colspan="5">Error loading orders</td></tr>';
            return;
        }
        const orders = await resOrders.json();
        
        if(orders.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">No orders found. <a href="index.html" style="color:var(--gold);">Start shopping</a></td></tr>';
            return;
        }
        
        tbody.innerHTML = '';
        orders.forEach(o => {
            const date = new Date(o.createdAt).toLocaleDateString();
            tbody.innerHTML += `
              <tr>
                 <td>#${o._id.substring(o._id.length-6).toUpperCase()}</td>
                 <td>${date}</td>
                 <td style="font-family: var(--font-m); color: var(--gold);">$${o.totalAmount.toFixed(2)}</td>
                 <td>${o.paymentMethod}</td>
                 <td><span style="background: ${o.status==='Pending'?'#e07c26':'#4caf7d'}; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; color: #FFF;">${o.status}</span></td>
              </tr>
            `;
        });
    } catch (err) {
        console.error(err);
    }
}

// Utility to logout
window.logout = function() {
    localStorage.removeItem('shopnest_token');
    localStorage.removeItem('shopnest_user');
    window.location.href = 'login.html';
};
