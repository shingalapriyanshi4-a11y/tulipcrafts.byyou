const products = [
    {
        id: 1,
        title: "Enchanted Lily & Tulip Bouquet",
        price: "₹650",
        desc: "A stunning, everlasting bouquet of pink and purple lilies combined with delicate tulips. Carefully crafted to mimic real petals, this premium bouquet is perfect for gifting or special occasions. Made with love and designed to last forever.",
        images: ["images/royal-lily-bouquet.webp", "images/royal-lily-2.webp", "images/royal-lily-3.webp"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 2,
        title: "Blush Pink Lily & Tulip Elegance",
        price: "₹800",
        desc: "A beautiful pastel blush pink bouquet featuring intricately crafted lilies and tulips with white borders. Wrapped elegantly in brown and cream paper, this soft-toned arrangement adds a touch of grace to any room.",
        images: ["images/pink-lily-tulip-bouquet.webp"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 3,
        title: "Mocha Chocolate Floral Pot",
        price: "₹750",
        desc: "The perfect sweet gift! A unique flower pot featuring chocolate-brown and beige pipe cleaner flowers, beautifully mixed with Dairy Milk chocolates. A delightful 2-in-1 gift for someone special.",
        images: ["images/chocolate-floral-pot.png"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 4,
        title: "Whimsical Spring Lily Bouquet",
        price: "₹650",
        desc: "A charming bouquet of pink and purple blooms paired with white accents. Finished with a cute polka-dot bow and elegant wrapping, it brings a fresh, whimsical spring vibe.",
        images: ["images/whimsical-spring-bouquet.jpg"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 5,
        title: "Elegant Pink Tulip Single Stem",
        price: "₹250",
        desc: "A beautiful, handcrafted single pink tulip with green leaves and a delicate white net wrapping. Perfect as a minimalist gift or a beautiful home decor piece.",
        images: ["images/single-stem.png"],
        category: "single-stems",
        bestseller: false
    },
    {
        id: 6,
        title: "Crimson Heart Lily & Tulip Bouquet",
        price: "₹250",
        desc: "A striking, handcrafted bouquet featuring a bold crimson red lily with white edges, a matching red tulip, and a cute crafted heart. Elegantly wrapped in white net and premium paper, it's the perfect affordable way to say 'I love you'.",
        images: ["images/crimson-heart-bouquet.jpg"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 7,
        title: "Sapphire Evil Eye Chocolate Bouquet",
        price: "₹450 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(With Chocolate)</small><br>₹300 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(Without Chocolate)</small>",
        desc: "A stunning deep blue sapphire bouquet featuring a striking evil eye (nazar) flower, dark blue lilies, and tulips. This elegant arrangement comes paired with delicious chocolates (Dairy Milk & KitKat), making it a perfect gift to protect and delight your loved ones.",
        images: ["images/sapphire-evil-eye-bouquet.jpg"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 8,
        title: "Romantic Red Floral Pearl Heart",
        price: "₹250",
        desc: "A beautifully crafted heart-shaped frame made of delicate red pipe-cleaner flowers, each adorned with a classic white pearl center. Elegantly wrapped in clear premium cellophane and tied with a silky red ribbon, this unique piece is the perfect expression of love.",
        images: ["images/red-pearl-heart-bouquet.jpg"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 9,
        title: "Lavender Dream Flower Pot",
        price: "₹450",
        desc: "A charming handcrafted flower pot featuring soft pastel pink textured base, beautifully arranged with elegant purple lavender-style blooms and white accents. This adorable mini pot is perfect for desk decor, gifting, or brightening up any small space.",
        images: ["images/lavender-dream-pot.png"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 10,
        title: "Golden Sunshine Lily & Sunflower Bouquet",
        price: "₹500",
        desc: "Bring warmth and joy with this bright golden-yellow handmade bouquet. Featuring a stunning large lily, cheerful sunflowers, and rich green leaves. Beautifully contrasting against premium matte black wrapping and finished with a pearl-edged white net and chic grey bow.",
        images: ["images/golden-sunshine-bouquet.jpg"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 11,
        title: "Tangerine Triple Tulip Pot",
        price: "₹550",
        desc: "A delightful handmade flower pot featuring three blossoming peach/tangerine tulips with rich green leaves. Set in a matching textured pot with faux brown soil, this vibrant piece brings a warm, cheerful aesthetic to any tabletop or home decor setting.",
        images: ["images/peach-tulip-pot.jpg"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 12,
        title: "Bright Sunflower Single Stem",
        price: "₹200 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(With Wrapping)</small><br>₹150 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(Without Wrapping)</small>",
        desc: "A beautifully handcrafted single sunflower stem with vibrant yellow petals and a dark center. Finished elegantly with a simple white ribbon. Perfect as a minimalist gift to brighten someone's day or as a sunny addition to your home decor.",
        images: ["images/sunflower-single-stem.jpg"],
        category: "single-stems",
        bestseller: true
    },
    {
        id: 13,
        title: "Blush Pink Gerbera Daisy Pot",
        price: "₹450",
        desc: "A beautifully detailed, large single pink gerbera daisy with a yellow center and rich green leaves, standing tall in a rustic beige textured pot. This charming handcrafted piece is a perfect, maintenance-free way to keep spring blooming in your home all year round.",
        images: ["images/pink-daisy-pot.jpg"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 14,
        title: "Crimson Pearl Heart Pot",
        price: "₹450",
        desc: "A truly romantic handmade pot featuring striking red heart-shaped blooms, each delicately detailed with a beautiful white pearl. Planted in a deep burgundy textured pot with lush green foliage, this piece is an eye-catching symbol of love and affection.",
        images: ["images/red-heart-pot.jpg"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 15,
        title: "Mini Lavender Desk Pot",
        price: "₹350",
        desc: "A cute and calming handmade mini pot featuring three tall purple lavender blooms with long graceful green leaves. Set in a charming white pot with a fuzzy purple rim, this is the perfect aesthetic addition to your work desk or bedside table.",
        images: ["images/mini-lavender-pot.jpg"],
        category: "flower-pots",
        bestseller: true
    },
    {
        id: 16,
        title: "Pastel Lily Single Stem",
        price: "₹150 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(With Wrapping)</small><br>₹100 <small style='font-weight:normal; font-size: 0.65em; opacity: 0.8;'>(Without Wrapping)</small>",
        desc: "A beautifully handcrafted single lily stem with stunning pastel petals and delicate white ruffled edges. Available in lovely pink and soft purple variants. Price is for 1 flower stem. A sweet and simple gesture to make someone smile.",
        images: ["images/pastel-lily-stem.jpg"],
        category: "single-stems",
        bestseller: true
    },
    {
        id: 17,
        title: "Personalized Photo Love Bouquet",
        price: "₹650",
        desc: "The ultimate custom gift! A stunning blue and white floral bouquet featuring personalized polaroid photos of your favorite memories and a sweet 'You are my LOVE' message card. Wrapped elegantly in pastel blue and finished with delicate pearl accents.",
        images: ["images/photo-memory-bouquet.jpg"],
        category: "custom-gifts",
        bestseller: true
    },
    {
        id: 18,
        title: "Rustic Sunflower & Daisy Bouquet",
        price: "₹500",
        desc: "A cheerful and earthy handmade bouquet featuring two bright sunflowers paired perfectly with delicate white daisies and green leaves. Wrapped in premium rustic brown kraft paper and finished with a dotted white net and ribbon. Guaranteed to brighten up any day!",
        images: ["images/rustic-sunflower-daisy.jpg"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 19,
        title: "Pastel Green Daisy Mobile Cover",
        price: "₹600",
        desc: "Handcrafted yarn mobile cover featuring beautiful white daisies on a pastel green textured background, complete with a cute bow. \n\n✨ **Can be custom made for ANY mobile phone model!** Please mention your phone model while ordering.",
        images: ["images/cover-green-daisy.png"],
        category: "mobile-covers",
        bestseller: false
    },
    {
        id: 20,
        title: "Pink Floral Mobile Cover with Charm",
        price: "₹700",
        desc: "Stunning textured pink mobile cover adorned with handmade 3D flowers and pearls. Comes with a matching floral keychain charm attached! \n\n✨ **Can be custom made for ANY mobile phone model!** Please mention your phone model while ordering.",
        images: ["images/cover-pink-charm.jpg"],
        category: "mobile-covers",
        bestseller: false
    },
    {
        id: 21,
        title: "Cherry Heart Pink Mobile Cover",
        price: "₹600",
        desc: "Adorable soft pink and cream textured cover featuring handmade 3D cherries, hearts, stars, and flowers with pearl accents. \n\n✨ **Can be custom made for ANY mobile phone model!** Please mention your phone model while ordering.",
        images: ["images/cover-cherry-heart.png"],
        category: "mobile-covers",
        bestseller: false
    },
    {
        id: 22,
        title: "Sunshine Yellow Tulip Mobile Cover",
        price: "₹600",
        desc: "Bright and cheerful yellow textured cover featuring beautiful 3D tulips with a pink bow and cute daisies. \n\n✨ **Can be custom made for ANY mobile phone model!** Please mention your phone model while ordering.",
        images: ["images/cover-yellow-tulip.png"],
        category: "mobile-covers",
        bestseller: false
    },
    {
        id: 23,
        title: "Classic Red Bow Keychain",
        price: "₹60",
        desc: "A beautiful handmade vibrant red bow keychain. Perfect for your car keys, bags, or gifting to a loved one!",
        images: ["images/keychain-red-bow.jpg"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 24,
        title: "Cute Cherry Keychain",
        price: "₹60",
        desc: "Adorable 3D handmade cherry keychain with a tiny pearl detail. A sweet accessory for your everyday essentials.",
        images: ["images/keychain-cherry.jpg"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 25,
        title: "Gradient Pink & Purple Hearts Keychain",
        price: "₹60",
        desc: "A stunning stack of handmade hearts featuring a beautiful gradient of pink and purple shades. Makes a perfect cute bag charm!",
        images: ["images/keychain-gradient-heart.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 26,
        title: "Happy Daisy Keychain",
        price: "₹60",
        desc: "A cheerful handmade white daisy with a bright orange center and green leaves. Brings a touch of nature to your bags or keys.",
        images: ["images/keychain-daisy.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 27,
        title: "Soft Pink Bow Keychain",
        price: "₹60",
        desc: "A delicate and aesthetic soft pink handmade bow keychain. Perfect for adding a cute coquette touch to your accessories.",
        images: ["images/keychain-pink-bow.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 28,
        title: "Vibrant Pink Flower Bag Charm",
        price: "₹100",
        desc: "A beautiful large pink and magenta handmade flower keychain. Perfect as a statement piece for your handbag or tote!",
        images: ["images/keychain-pink-flower.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 29,
        title: "Yellow & Purple Lily Keychain",
        price: "₹100",
        desc: "A stunning handmade lily keychain featuring yellow petals with purple accents and an orange center. An aesthetic charm for your bags.",
        images: ["images/keychain-yellow-purple-flower.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 30,
        title: "Strawberry Pearl Keychain",
        price: "₹120",
        desc: "A cute and chunky 3D handmade strawberry keychain with tiny pearl seeds. Comes with an elegant pearl handle strap attached!",
        images: ["images/keychain-strawberry.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 31,
        title: "Sunflower Pearl Keychain",
        price: "₹150",
        desc: "A bright and beautiful handmade sunflower keychain. It features a premium pearl beaded strap that makes it look incredibly elegant on any bag.",
        images: ["images/keychain-sunflower.png"],
        category: "keychains",
        bestseller: false
    },
    {
        id: 32,
        title: "Cute Octopus Couple Keychain",
        price: "₹130 <br> <small>(₹220 for 2 pieces)</small>",
        desc: "Adorable little 3D handmade octopus keychains with cute smiles! \n\n✨ **Price: ₹130 for 1 piece / ₹220 for a pair of 2.** \nPlease mention your desired color (Pink or Purple) or if you want a couple set while ordering.",
        images: ["images/keychain-octopus.jpg"],
        category: "keychains",
        bestseller: true
    },
    {
        id: 33,
        title: "Ocean Blue & White Lily Bouquet",
        price: "₹600",
        desc: "A stunning handmade bouquet featuring gorgeous blue and white gradient lilies alongside deep blue tulips. Elegantly wrapped in premium white paper with a light blue sheer ribbon.",
        images: ["images/bouquet-blue-white.png"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 34,
        title: "Elegant Pure White Lily Bouquet",
        price: "₹900",
        desc: "A premium and highly detailed handmade bouquet of pure white lilies with subtle yellow centers and realistic green stems/buds. Luxuriously wrapped in soft sage green paper.",
        images: ["images/bouquet-white-green.png"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 35,
        title: "Grand Purple & White Mixed Floral Bouquet",
        price: "₹1000",
        desc: "Our grandest masterpiece! A massive and beautiful handmade bouquet featuring a mix of large purple lilies, white lilies, purple tulips, and lavender stems. Wrapped to perfection in layered white and pink paper with sheer ribbons. The ultimate premium gift!",
        images: ["images/bouquet-purple-white-mixed.png"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 36,
        title: "Mini Pink Floral & Tulip Bouquet",
        price: "₹300",
        desc: "A cute mini handmade bouquet featuring a pink flower, a tulip, and tiny floral details. Wrapped beautifully in clear and checkered paper.",
        images: ["images/bouquet-pink-small.png"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 37,
        title: "Triple Pink Tulip Bouquet",
        price: "₹250",
        desc: "A lovely handmade bouquet of three plush pink tulips accented with small pink cherry blossoms. Elegantly wrapped in soft pink and white layers.",
        images: ["images/bouquet-three-pink-tulips.jpg"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 38,
        title: "Sunflower & Daisy Mini Bouquet",
        price: "₹300",
        desc: "A bright and cheerful handmade bouquet featuring one large sunflower and a bunch of tiny white daisies. Wrapped in soft cream paper with a satin bow.",
        images: ["images/bouquet-sunflower-daisy.jpg"],
        category: "bouquets",
        bestseller: false
    },
    {
        id: 39,
        title: "Elegant Pink Lily & Tulip Bouquet",
        price: "₹450",
        desc: "A highly sophisticated handmade bouquet featuring soft pink lilies, tulips, and daisies. Wrapped luxuriously in premium white and pink pleated paper.",
        images: ["images/bouquet-elegant-pink.png"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 40,
        title: "Coffee & Cream Floral Bouquet",
        price: "₹650",
        desc: "A very unique and aesthetic handmade bouquet featuring rich coffee brown and cream-colored lilies and roses. Perfectly wrapped in matching earth-toned brown and gold paper.",
        images: ["images/bouquet-coffee-brown.png"],
        category: "bouquets",
        bestseller: true
    },
    {
        id: 41,
        title: "Single Pink Lily Bouquet",
        price: "₹150",
        desc: "A beautiful handmade single pink lily stem, elegantly wrapped in soft pink paper and detailed with delicate pearl trim. A perfect little gift!",
        images: ["images/single-pink-lily.png"],
        category: "single-stems",
        bestseller: false
    },
    {
        id: 42,
        title: "Single Sunflower Kraft Bouquet",
        price: "₹180",
        desc: "A bright and cheerful handmade single sunflower stem, beautifully wrapped in rustic kraft paper with a white satin ribbon. Perfect for brightening someone's day.",
        images: ["images/single-sunflower.jpg"],
        category: "single-stems",
        bestseller: false
    },
    {
        id: 43,
        title: "Classic Single Red Rose",
        price: "₹200",
        desc: "The ultimate symbol of love! A premium handmade single red rose stem with green leaves, elegantly wrapped in premium pink and white paper with a sheer bow.",
        images: ["images/single-red-rose.jpg"],
        category: "single-stems",
        bestseller: true
    },
    {
        id: 44,
        title: "Blue & Pink Daisy Card Holder",
        price: "₹130",
        desc: "A beautiful handmade flower card featuring a blue and a pink daisy. Attached to a premium blue card with a sheer ribbon. Perfect for writing special messages!",
        images: ["images/card-blue-pink-daisy.png"],
        category: "flower-card-holder",
        bestseller: false
    },
    {
        id: 45,
        title: "Tulip Bunch Card Holder",
        price: "₹140 <br> <small>(₹260 for 2 cards)</small>",
        desc: "A lovely handmade mini tulip bunch (available in yellow or purple) attached to a pink 'Everyday Good Luck' card. \n\n✨ **Price: ₹140 for single / ₹260 for a pair.** Please mention your color preference while ordering.",
        images: ["images/card-tulip-bunch.png"],
        category: "flower-card-holder",
        bestseller: true
    },
    {
        id: 46,
        title: "Pastel Lily Card Holder",
        price: "₹150",
        desc: "A delicate handmade pastel lily attached to a beautiful aesthetic card. A sweet and simple gift to wish someone good luck.",
        images: ["images/card-lilies.png"],
        category: "flower-card-holder",
        bestseller: false
    },
    {
        id: 47,
        title: "Colorful Daisy Card Holder",
        price: "₹130",
        desc: "A cute handmade fluffy daisy attached to a vibrant card. Available in multiple pastel colors. Makes a cute little decorative gift!",
        images: ["images/card-daisies.png"],
        category: "flower-card-holder",
        bestseller: false
    },
    {
        id: 48,
        title: "Sunflower Card Holder",
        price: "₹180",
        desc: "A bright handmade sunflower with tiny white daisies, beautifully tied with a sheer white ribbon onto a premium pastel card. The perfect congratulatory gift!",
        images: ["images/card-sunflower.jpg"],
        category: "flower-card-holder",
        bestseller: false
    },
    {
        id: 49,
        title: "Mini Sunflower Newspaper Wrap",
        price: "₹50",
        desc: "A tiny and aesthetic handmade sunflower wrapped in vintage newspaper style paper. A perfect small token of appreciation!",
        images: ["images/mini-sunflower.png"],
        category: "single-stems",
        bestseller: false
    },
    {
        id: 50,
        title: "Green Floral Greeting Card",
        price: "₹70",
        desc: "A beautiful handmade mini green floral bouquet attached directly to a 'This flower is for you' greeting card. Best for gifting your lovely friends!",
        images: ["images/card-green-bouquet.png"],
        category: "flower-card-holder",
        bestseller: false
    },
    {
        id: 51,
        title: "Mini Pink Star Flowers Bouquet",
        price: "₹80",
        desc: "A cute little handful bouquet made of soft pink star-shaped flowers with pearl centers. Wrapped in rustic kraft paper with a ribbon.",
        images: ["images/mini-pink-bouquet.png"],
        category: "bouquets",
        bestseller: true
    }
];

// --- Global Authentication System ---
function initAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // 1. Add Login/Logout button to Nav
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && !document.getElementById('navAuthBtn')) {
        const authLi = document.createElement('li');
        authLi.innerHTML = `<a href="#" id="navAuthBtn" style="font-weight:bold; color:var(--color-peach-dark);">${isLoggedIn ? 'My Account' : 'Login'}</a>`;
        navLinks.appendChild(authLi);
    }

    // 2. Inject Modal HTML
    if (!document.getElementById('loginModal')) {
        const modalHTML = `
        <div id="loginModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; align-items:center; justify-content:center; backdrop-filter: blur(5px);">
            <div style="background:white; padding:40px; border-radius:20px; width:90%; max-width:400px; text-align:center; position:relative; box-shadow: 0 10px 40px rgba(0,0,0,0.2); animation: scaleUp 0.3s ease;">
                <span id="closeLogin" style="position:absolute; right:20px; top:15px; font-size:1.5rem; cursor:pointer; color:gray;">&times;</span>
                <h2 style="margin-bottom:10px; color:var(--color-peach-dark);">Welcome Back</h2>
                <p style="color:gray; font-size:0.9rem; margin-bottom:25px;">Please login to place an order</p>
                
                <button id="googleLoginBtn" style="width:100%; padding:12px; background:white; border:1px solid #ddd; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer; font-weight:bold; font-family:inherit; margin-bottom:20px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style="width:20px; height:20px;">
                    Continue with Google
                </button>
                
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px; color:gray; font-size:0.8rem;">
                    <hr style="flex:1; border:none; border-top:1px solid #eee;">
                    OR
                    <hr style="flex:1; border:none; border-top:1px solid #eee;">
                </div>

                <form id="loginForm" style="display:flex; flex-direction:column; gap:15px;">
                    <input type="email" placeholder="Email Address" required style="padding:15px; border:1px solid #ddd; border-radius:10px; outline:none; font-family:inherit;">
                    <input type="password" placeholder="Password" required style="padding:15px; border:1px solid #ddd; border-radius:10px; outline:none; font-family:inherit;">
                    <button type="submit" class="btn btn-primary" style="padding:15px; border-radius:10px; margin-top:5px;">Login Securely</button>
                </form>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const loginModal = document.getElementById('loginModal');
    const openLoginModal = () => {
        if (loginModal) {
            loginModal.style.display = 'flex';
        }
    };
    const closeLoginModal = () => {
        if (loginModal) {
            loginModal.style.display = 'none';
        }
    };
    
    // 3. Setup Listeners
    document.body.addEventListener('click', (e) => {
        // Handle Nav Login Button
        if (e.target.id === 'navAuthBtn') {
            e.preventDefault();
            if (isLoggedIn) {
                if(confirm("Do you want to logout?")) {
                    localStorage.setItem('isLoggedIn', 'false');
                    location.reload();
                }
            } else {
                openLoginModal();
            }
        }
        // Handle Close Modal
        if (e.target.id === 'closeLogin' || e.target.id === 'loginModal') {
            closeLoginModal();
        }
        
        // Protect "Buy It Now" and Form Submission
        if (e.target.classList.contains('btn-buy-now') || (e.target.tagName === 'BUTTON' && e.target.textContent.includes('Submit Order'))) {
            if (!isLoggedIn) {
                e.preventDefault();
                e.stopPropagation();
                openLoginModal();
            }
        }
    }, true); // Use capture phase to intercept clicks before they trigger links

    // Handle Google Login Click
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    if(googleLoginBtn) {
        googleLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate Google Login popup delay
            googleLoginBtn.innerHTML = 'Connecting to Google...';
            setTimeout(() => {
                localStorage.setItem('isLoggedIn', 'true');
                alert('🎉 Logged in with Google successfully! You can now place your order.');
                location.reload();
            }, 800);
        });
    }

    // Handle form submit
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'true');
            alert('🎉 Login successful!');
            location.reload();
        });
    }

    // --- Reviews System Logic ---
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviews-list');
    const addReviewContainer = document.getElementById('add-review-container');

    if (reviewsList) {
        const loadReviews = () => {
            const reviews = JSON.parse(localStorage.getItem('tulip_reviews') || '[]');
            if (reviews.length === 0) {
                reviewsList.innerHTML = '<p style="color:gray; width:100%;">No reviews yet. Be the first to leave one!</p>';
            } else {
                reviewsList.innerHTML = reviews.map(r => `
                    <div class="product-card" style="padding: 30px; max-width: 350px; text-align: left; width: 100%; background: white;">
                        <div style="color: #FFD700; font-size: 1.2rem; margin-bottom: 10px;">★★★★★</div>
                        <p style="font-style: italic; margin-bottom: 15px; color: var(--color-text-main);">"${r.text}"</p>
                        <strong style="color: var(--color-peach-dark);">- ${r.name}</strong>
                    </div>
                `).join('');
            }
        };

        if (addReviewContainer) {
            if (isLoggedIn) {
                addReviewContainer.style.display = 'block';
            } else {
                addReviewContainer.innerHTML = '<p style="color:gray; font-size: 0.95rem; margin: 0;">Please <a href="#" id="loginToReview" style="color:var(--color-peach-dark); font-weight:bold; text-decoration:underline;">Login</a> to leave a review.</p>';
                const loginToReview = document.getElementById('loginToReview');
                if (loginToReview) {
                    loginToReview.addEventListener('click', (e) => {
                        e.preventDefault();
                        openLoginModal();
                    });
                }
            }
        }

        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newReview = {
                    name: document.getElementById('reviewName').value,
                    text: document.getElementById('reviewText').value,
                    date: new Date().toISOString()
                };
                const reviews = JSON.parse(localStorage.getItem('tulip_reviews') || '[]');
                reviews.unshift(newReview); // Add to beginning
                localStorage.setItem('tulip_reviews', JSON.stringify(reviews));
                reviewForm.reset();
                alert('Thank you! Your review has been added successfully.');
                loadReviews();
            });
        }

        loadReviews();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
