let products = [
  { id: 1, name: "Blue Performance Sneakers", category: "Shoes & Slippers", price: 1499, image: "assets/products/-original-imahgctkerhrqpgz.webp", tag: "New", rating: 4.6 },
  { id: 2, name: "Beige Bruton Running Shoes", category: "Shoes & Slippers", price: 1199, image: "assets/products/6-rng-854-beige-6-bruton-beige-resized-2-original-imahbgyzxr6ygvye.webp", tag: "Value", rating: 4.4 },
  { id: 3, name: "White Navy Sport Sneakers", category: "Shoes & Slippers", price: 1599, image: "assets/products/-original-imahnsbgpgfsq8gk.webp", tag: "Trending", rating: 4.7 },
  { id: 4, name: "Action Grey Walking Shoes", category: "Shoes & Slippers", price: 999, image: "assets/products/6-atg-424-6-action-grey-original-imahfjdcykkpufhg.webp", tag: "Hot", rating: 4.3 },
  { id: 5, name: "Killer White Black Sneakers", category: "Shoes & Slippers", price: 1799, image: "assets/products/7-hock-white-black-7-0-killer-white-black-resized-2-original-imahf7q9teqdcwn4.webp", tag: "Premium", rating: 4.6 },
  { id: 6, name: "Uniqpal A4 Notebook Set", category: "Stationery", price: 399, image: "assets/products/spiral-a4-notebook-set-of-5-up-plain-a4-nb-200p-5-uniqpal-original-imahaytryvzhm42p.webp", tag: "Study", rating: 4.5 },
  { id: 7, name: "UPSC Spiral Notebook Pack", category: "Stationery", price: 549, image: "assets/products/bb-upsc-sprl-bk210-pk03-d6-bungbee-original-imahhx64yjt3pqg8.webp", tag: "Study", rating: 4.4 },
  { id: 8, name: "Unicorn Lock Diary", category: "Stationery", price: 349, image: "assets/products/angel-printed-diary-with-number-lock-for-girls-lock-diary-with-original-imag83szn2rjzngg.webp", tag: "Gift", rating: 4.7 },
  { id: 9, name: "Color Spiral Notebook Set", category: "Stationery", price: 449, image: "assets/products/spiral-a4-notebook-set-of-5-up200pl-5-nba4-uniqpal-original-imah4zfeaambhszz.webp", tag: "New", rating: 4.5 },
  { id: 10, name: "Executive Notebook Pack", category: "Stationery", price: 699, image: "assets/products/pack-of-2-a5-pro-series-executive-notebook-blue-8904345115295-original-imahhspzksezernp.webp", tag: "Office", rating: 4.6 },
  { id: 11, name: "Signature Pen Gift Set", category: "Stationery", price: 799, image: "assets/products/4-10-gold-plated-ball-pen-and-gold-plated-visiting-card-holder-enriched-0-original-imah5hbae4q8mfua.webp", tag: "Gift", rating: 4.5 },
  { id: 12, name: "Swiss Beauty Lip Oil", category: "Beauty Accessories", price: 299, image: "assets/products/5-0-dip-tint-lip-oil-1-swiss-beauty-original-imahckwuhczxcbgz.webp", tag: "Beauty", rating: 4.4 },
  { id: 13, name: "Crush Lip Gloss Set", category: "Beauty Accessories", price: 499, image: "assets/products/10-crush-limited-edition-glossifive-lip-gloss-fuller-and-plump-original-imahkkjgh6ffmzf2.webp", tag: "New", rating: 4.5 },
  { id: 14, name: "Tint Me On Lip Balm", category: "Beauty Accessories", price: 249, image: "assets/products/1-tint-me-on-lip-balm-1-swiss-beauty-original-imagwzwthpcjhze6.webp", tag: "Popular", rating: 4.3 },
  { id: 15, name: "Strobe Cream Glow", category: "Beauty Accessories", price: 399, image: "assets/products/30-strobe-cream-beauty-glow-product-skin-brightening-makeup-original-imahmy62p3ffhmc9.webp", tag: "Glow", rating: 4.2 },
  { id: 16, name: "Complete Makeup Kit", category: "Beauty Accessories", price: 999, image: "assets/products/beauty-makeup-kit-products-unique-items-glow-it-original-imahc49yheu9ukhz.webp", tag: "Combo", rating: 4.6 },
  { id: 17, name: "Mars Matte Lipstick Box", category: "Beauty Accessories", price: 649, image: "assets/products/9-6-3-and-matte-lipstick-box-set-mars-original-imahnu6m9mnadt66.webp", tag: "Combo", rating: 4.5 },
  { id: 18, name: "Rice Ceramide Skin Kit", category: "Beauty Accessories", price: 1199, image: "assets/products/glass-skin-rice-ceramide-7-step-weekly-skincare-routine-for-original-imahj83ybtzhvqzb.webp", tag: "Skincare", rating: 4.6 },
  { id: 19, name: "SPF 50 Foundation", category: "Beauty Accessories", price: 549, image: "assets/products/40-spf50-pa-high-coverage-foundation-tested-by-in-vivo-with-5-original-imahkjhbqd27zwwx.webp", tag: "Makeup", rating: 4.4 },
  { id: 20, name: "Vitamin C Face Serum", category: "Beauty Accessories", price: 449, image: "assets/products/20-vitamin-c-serum-for-oily-skin-clinically-tested-to-be-non-original-imahkatxynxbkh3e.webp", tag: "Skincare", rating: 4.3 },
  { id: 21, name: "Classic Brown Wallet", category: "Wallets", price: 599, image: "assets/products/dcs-atm-bro-1-10-wallet-5-wallet-true-style-8-original-imahcz5kjzppkjwr.webp", tag: "Men", rating: 4.3 },
  { id: 22, name: "RFID Leather Wallet", category: "Wallets", price: 899, image: "assets/products/rfid-protected-100-genuine-high-quality-mens-leather-wallet-1-12-original-imah4srvbcb8z5ej.webp", tag: "Premium", rating: 4.6 },
  { id: 23, name: "Provogue Compact Wallet", category: "Wallets", price: 749, image: "assets/products/loise-borren-1-4-5-1-5-wallet-provogue-3-5-original-imahgmuhtxyk7awb.webp", tag: "New", rating: 4.4 },
  { id: 24, name: "Designer Satchel Bag", category: "Women Bags", price: 1299, image: "assets/products/sara-ali-khan-satchel-flomotif-35-zbsh-fm-satchel-zouk-26-original-imahmzdm5hmnfzmw.webp", tag: "Premium", rating: 4.8 },
  { id: 25, name: "Yash Fashion Handbag", category: "Women Bags", price: 1199, image: "assets/products/handbagvsw6-6-0-handbag-yash-fashion-7-original-imahnmufpeszddh7.webp", tag: "Popular", rating: 4.5 },
  { id: 26, name: "MSM Brown Handbag", category: "Women Bags", price: 999, image: "assets/products/mc-hand-bag-2005-22-mc-hand-bag-2005-handbag-msmenterprises-20-original-imahnp2vxjberuzy.webp", tag: "Daily", rating: 4.3 },
  { id: 27, name: "White Mini Handbag", category: "Women Bags", price: 1399, image: "assets/products/hand-bag-2006-20-hand-bag-2006-handbag-msmenterprises-22-original-imahnp2ygcn3qsg7.webp", tag: "New", rating: 4.5 },
  { id: 28, name: "Pink Korean Backpack", category: "Backpacks", price: 1499, image: "assets/products/6-0-korean-style-pink-backpack-for-girls-and-women-11-0-pw1pk-original-imahm85kfwrqbwxz.webp", tag: "College", rating: 4.7 },
  { id: 29, name: "Black Travel Backpack", category: "Backpacks", price: 1899, image: "assets/products/16-premium-minimalist-black-waterproof-travel-backpack-with-original-imahhy5ds4eeypwg.webp", tag: "Travel", rating: 4.6 },
  { id: 30, name: "Floral College Backpack", category: "Backpacks", price: 1399, image: "assets/products/6-0-stylish-floral-backpack-for-girls-women-school-college-original-imahnp5y3y4chwp6.webp", tag: "New", rating: 4.5 },
  { id: 31, name: "Grey Laptop Backpack", category: "Backpacks", price: 1599, image: "assets/products/6-multi-use-water-resistant-backpack-for-daily-use-college-original-imahmhfuqmxgybzx.webp", tag: "Laptop", rating: 4.4 },
  { id: 32, name: "USB Rain Cover Backpack", category: "Backpacks", price: 1299, image: "assets/products/12-ashper-unisex-with-usb-port-and-rain-cover-14-w-095-laptop-original-imahgtcnwhfpsggv.webp", tag: "Tech", rating: 4.6 },
  { id: 33, name: "Lavie Copper Heels", category: "Women Heels", price: 1599, image: "assets/products/7-lav-am-289-copper-40-0-lavie-copper-original-imahg6uvrzrmdbg9.webp", tag: "Party", rating: 4.5 },
  { id: 34, name: "Aura Crystal Block Heels", category: "Women Heels", price: 1799, image: "assets/products/5-aura-crystal-multi-strap-lucite-block-heel-sandals-5-0-original-imahnnvhduxzjxjx.webp", tag: "Premium", rating: 4.7 },
  { id: 35, name: "Kajmi White Heels", category: "Women Heels", price: 1299, image: "assets/products/4-1809-kj-18-4-kajmi-white-original-imahmqbnfbhqppcn.webp", tag: "New", rating: 4.4 },
  { id: 36, name: "Killer Copper Heels", category: "Women Heels", price: 999, image: "assets/products/2-kl-56-2-killer-copper-original-imahm9zsqmfyscdc.webp", tag: "Value", rating: 4.3 },
  { id: 37, name: "Shoetopia Brown Heels", category: "Women Heels", price: 1499, image: "assets/products/5-ak-70-38-0-shoetopia-brown-original-imahmtqqa2exa8fh.webp", tag: "Trending", rating: 4.5 },
  { id: 38, name: "Pink Labubu Slippers", category: "Shoes & Slippers", price: 599, image: "assets/products/9-roux-labubu-pink-roux-pink-original-imahkcpqftyspvmb.webp", tag: "Cute", rating: 4.2 },
  { id: 39, name: "Walkway Beige Sandals", category: "Shoes & Slippers", price: 799, image: "assets/products/4-32-1494-walkway-dark-beige-original-imahndynundm79gx.webp", tag: "Daily", rating: 4.3 },
  { id: 40, name: "Sky Blue Slippers", category: "Shoes & Slippers", price: 549, image: "assets/products/5-crozi-1007-lehar-sky-blue-original-imahgtg3sebjamms.webp", tag: "Comfort", rating: 4.2 },
  { id: 41, name: "Skytrap Brown Sandals", category: "Shoes & Slippers", price: 749, image: "assets/products/7-s-st-085-brn-skytrap-brown-original-imahgsffhdwz6fgt.webp", tag: "Daily", rating: 4.1 },
  { id: 42, name: "Blue Embroidered Saree", category: "Sarees & Ethnic", price: 1399, image: "assets/products/free-rupa-blue-akhodalkrp-stitched-original-imahmp6hjgf6sagc.webp", tag: "Ethnic", rating: 4.7 },
  { id: 43, name: "Partywear Green Suit", category: "Sarees & Ethnic", price: 1799, image: "assets/products/free-gth-partwear123-borana-unstitched-original-imahhyqzyyxzkpkf.webp", tag: "Festive", rating: 4.5 },
  { id: 44, name: "Moda Lavi Suit Set", category: "Sarees & Ethnic", price: 1899, image: "assets/products/free-moda-lavi-lb-pd8888-2-moda-rapido-unstitched-original-imahfr58g9tkhrg8.webp", tag: "New", rating: 4.4 },
  { id: 45, name: "Pink Kasee Dress Material", category: "Sarees & Ethnic", price: 1299, image: "assets/products/free-2574-pink-kasee-unstitched-original-imahhf4cyzy7wvqx.webp", tag: "Daily", rating: 4.3 },
  { id: 46, name: "Golden Shimmer Saree", category: "Sarees & Ethnic", price: 1599, image: "assets/products/free-golden-shrimmer-sadala-culture-unstitched-original-imahmy738fqzf2kv.webp", tag: "Premium", rating: 4.8 },
  { id: 47, name: "Kanjivaram Silk Saree", category: "Sarees & Ethnic", price: 1799, image: "assets/products/free-kanjivaram-sarees-kanjivaram-saree-banarasi-silk-high-original-imahm9wuvm6ymrfn.webp", tag: "Wedding", rating: 4.8 },
  { id: 48, name: "Kashvi Cotton Suit", category: "Sarees & Ethnic", price: 999, image: "assets/products/yes-2-35-m-unstitched-2-10m-tt-dm1-46-kashvi-resized-2-original-imagc6y8y3pzbvmq.webp", tag: "Value", rating: 4.2 },
  { id: 49, name: "Straight Kurta Set", category: "Women Fashion", price: 1599, image: "assets/products/xxl-stright-kurta-set-musaniyaa-feb-original-imahfsvsbztt72d6.webp", tag: "Kurta", rating: 4.4 },
  { id: 50, name: "Purple Kriti Suit Set", category: "Sarees & Ethnic", price: 1399, image: "assets/products/yes-2-5-m-unstitched-2-5-m-cs236-purple-kriti-original-imahkuzyuh5zxg7w.webp", tag: "New", rating: 4.3 },
  { id: 51, name: "Shreyam Casual Top", category: "Women Fashion", price: 699, image: "assets/products/m-top-ware-shreyam-enterprise-original-imahgexp5yebpzry.webp", tag: "Topwear", rating: 4.1 },
  { id: 52, name: "Red Floral Dress", category: "Women Fashion", price: 1499, image: "assets/products/3xl-cj-red-chilly-cajuni-original-imahm9m9hghaywp6.webp", tag: "Dress", rating: 4.4 },
  { id: 53, name: "Green Floral Dress", category: "Women Fashion", price: 1699, image: "assets/products/xl-drs-green-floral-01-sadhnazon-original-imahhykfg8nrhjxf.webp", tag: "Dress", rating: 4.6 },
  { id: 54, name: "Kotty Casual Dress", category: "Women Fashion", price: 1299, image: "assets/products/m-n1-kttdress225-kotty-original-imahnhhydtbr67km.webp", tag: "New", rating: 4.4 },
  { id: 55, name: "Metronaut Women Dress", category: "Women Fashion", price: 1199, image: "assets/products/s-mn-wd1334-metronaut-original-imahkmsubbz3a3fu.webp", tag: "Daily", rating: 4.2 },
  { id: 56, name: "Neysa Black Pants", category: "Women Fashion", price: 899, image: "assets/products/40-930-black-neysa-original-imah49xhwy8ebkp2.webp", tag: "Bottomwear", rating: 4.3 },
  { id: 57, name: "Striped Pajama Pants", category: "Women Fashion", price: 799, image: "assets/products/m-new-bl-strips-paj-omney-original-imahkr5scqggdrvz.webp", tag: "Comfort", rating: 4.1 },
  { id: 58, name: "Parallel Trousers", category: "Women Fashion", price: 949, image: "assets/products/xl-s-1-sh-107-parallel-trousers-pawan-co-original-imahn95qk98z4ghv.webp", tag: "Bottomwear", rating: 4.3 },
  { id: 59, name: "Vebnor Men Trouser", category: "Men Fashion", price: 999, image: "assets/products/30-tu1-vebnor-original-imagmy6hhhz62qzn.webp", tag: "Trouser", rating: 4.3 },
  { id: 60, name: "Arogni Men Trouser", category: "Men Fashion", price: 899, image: "assets/products/28-gj-hkm-arogni-original-imahnmkmnm9cudfe.webp", tag: "Trouser", rating: 4.1 },
  { id: 61, name: "Tanip Formal Trouser", category: "Men Fashion", price: 1199, image: "assets/products/34-ts-trouser0062-tanip-original-imahgyryyd6ez5k6.webp", tag: "Formal", rating: 4.4 },
  { id: 62, name: "Fabflee Men Trouser", category: "Men Fashion", price: 1099, image: "assets/products/30-men-trouser-fab-7003-fabflee-original-imahkh8j74bmesst.webp", tag: "Formal", rating: 4.3 },
  { id: 63, name: "Ana Men Shirt", category: "Men Fashion", price: 799, image: "assets/products/m-st-pf-30-anamenterprise-original-imahnmvpvjcmvk8d.webp", tag: "Shirt", rating: 4.1 },
  { id: 64, name: "Metronaut Formal Shirt", category: "Men Fashion", price: 999, image: "assets/products/l-01-formal-shirts-metronaut-original-imahm7fjpvpgvtsh.webp", tag: "Formal", rating: 4.5 },
  { id: 65, name: "Vebnor Casual Shirt", category: "Men Fashion", price: 849, image: "assets/products/s-st136-vebnor-original-imahnnhftvvkvgny.webp", tag: "Shirt", rating: 4.2 },
  { id: 66, name: "Dimmy Checked Shirt", category: "Men Fashion", price: 799, image: "assets/products/xl-chkesdsa01-dimmy-original-imahmfu3sqrmh3q8.webp", tag: "Casual", rating: 4.2 },
  { id: 67, name: "Rodeiz Denim Shirt", category: "Men Fashion", price: 1199, image: "assets/products/m-dark-lightblue-rodeiz-original-imahjyqpbg3dpuu8.webp", tag: "Denim", rating: 4.5 },
  { id: 68, name: "Metronaut Maroon Suit", category: "Men Fashion", price: 1999, image: "assets/products/40-mt-3pcs-suit-mehroon-metronaut-original-imahc4g5nz5zennz.webp", tag: "Premium", rating: 4.7 },
  { id: 69, name: "February Queen Mug", category: "Gift Sets", price: 349, image: "assets/products/queens-are-born-in-february-birthday-gift-for-wife-sister-mom-original-imahaghju3xvdzpr.webp", tag: "Gift", rating: 4.4 },
  { id: 70, name: "Cute Panda Night Light", category: "Gift Sets", price: 599, image: "assets/products/1-cute-panda-night-light-23-detak-original-imah5yjxq6gzpvpr.webp", tag: "Cute", rating: 4.6 },
  { id: 71, name: "Round Wooden Photo Frame", category: "Gift Sets", price: 799, image: "assets/products/wooden-photo-frame-1-round-mintola-works-original-imahmjusm7zpdgha.webp", tag: "Personalized", rating: 4.5 },
  { id: 72, name: "Personalized Photo Frame", category: "Gift Sets", price: 999, image: "assets/products/personalized-photo-frame-2-sg-11447-shree-govindam-original-imahhdvfdghzsqdh.webp", tag: "Photo", rating: 4.4 },
  { id: 73, name: "LED Moments Wall Hanger", category: "Gift Sets", price: 1199, image: "assets/products/moments-with-led-light-1-kwh034-wall-hanger-khush-its-amazing-original-imagytj9uncrjrfg.webp", tag: "Decor", rating: 4.5 },
  { id: 74, name: "Forever Rose Dome", category: "Gift Sets", price: 1299, image: "assets/products/beauty-the-beast-rose-forever-rose-in-a-glass-dome-with-led-enriched-0-original-imagwdgjsqecrygp.webp", tag: "Romantic", rating: 4.7 },
  { id: 75, name: "Valentine Wood Gift", category: "Gift Sets", price: 699, image: "assets/products/valentine-s-day-d002-woodbuddy-original-imahnp38kwtg5wf6.webp", tag: "Valentine", rating: 4.3 },
  { id: 76, name: "Birthday Crystal Ball", category: "Gift Sets", price: 899, image: "assets/products/birthday-crystal-ball-3d-inner-carved-small-led-light-with-wood-original-imahju2mczguf5hz.webp", tag: "Birthday", rating: 4.5 },
  { id: 77, name: "Thanksgiving Gift Box", category: "Gift Sets", price: 1499, image: "assets/products/thanks-giving-day-cw-gftbx-01-giftgram-original-imahmqwvxjznfynz.webp", tag: "Hamper", rating: 4.6 },
  { id: 78, name: "Anniversary Hamper", category: "Gift Sets", price: 1699, image: "assets/products/anniversary-gift-hamper-for-women-qnhok-original-imahn4nsddkkgxys.webp", tag: "Hamper", rating: 4.7 }
];

const categories = ["All", "Men Fashion", "Women Fashion", "Sarees & Ethnic", "Women Bags", "Backpacks", "Gift Sets", "Stationery", "Wallets", "Beauty Accessories", "Shoes & Slippers", "Women Heels"];
let cart = [];
let wishlist = new Set();
let orders = [
  { id: "ORD-1021", items: "Elegant Hand Bag, Beauty Gift Set", total: 2497, status: "Packed" },
  { id: "ORD-1022", items: "Men Casual Shirt Set", total: 1398, status: "Shipped" }
];
let currentPage = 1;
let selectedProduct = products[0];
let currentUser = null;
const perPage = 12;

const DB_KEY = "veloraMartDatabase";

function loadDatabase() {
  try {
    return JSON.parse(localStorage.getItem(DB_KEY)) || {};
  } catch {
    return {};
  }
}

function saveDatabase() {
  localStorage.setItem(DB_KEY, JSON.stringify({
    products,
    cart,
    wishlist: [...wishlist],
    orders,
    currentUser
  }));
}

const database = loadDatabase();
if (Array.isArray(database.products) && database.products.length) products = database.products;
if (Array.isArray(database.cart)) cart = database.cart;
if (Array.isArray(database.wishlist)) wishlist = new Set(database.wishlist);
if (Array.isArray(database.orders) && database.orders.length) orders = database.orders;
if (database.currentUser) currentUser = database.currentUser;
selectedProduct = products[0];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function navigate(page) {
  $$(".page").forEach((section) => section.classList.toggle("active", section.id === page));
  $$("[data-page-link]").forEach((link) => link.classList.toggle("active", link.dataset.pageLink === page));
  document.querySelector(".site-header").classList.remove("menu-open");
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (page === "products") renderProducts();
  if (page === "cart") renderCart();
  if (page === "orders") renderOrders();
  if (page === "admin") renderAdmin();
  if (page === "details") renderDetails();
}

function productCard(product) {
  const active = wishlist.has(product.id) ? "active" : "";
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-body">
        <div class="product-meta"><span>${product.category}</span><span>${product.tag}</span></div>
        <h3>${product.name}</h3>
        <p class="price">${money(product.price)}</p>
        <div class="product-actions">
          <button class="primary-btn" type="button" data-add-cart="${product.id}">Add to Cart</button>
          <button class="heart ${active}" type="button" data-wishlist="${product.id}" aria-label="Add ${product.name} to wishlist">♥</button>
        </div>
        <button class="text-btn" type="button" data-details="${product.id}">View Details</button>
      </div>
    </article>`;
}

function getFilteredProducts() {
  const search = $("#searchInput")?.value.toLowerCase() || "";
  const category = $("#categoryFilter")?.value || "All";
  const sort = $("#sortFilter")?.value || "featured";
  let result = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });
  if (sort === "low") result.sort((a, b) => a.price - b.price);
  if (sort === "high") result.sort((a, b) => b.price - a.price);
  if (sort === "new") result = result.filter((product) => product.tag === "New");
  return result;
}

function renderProducts() {
  const result = getFilteredProducts();
  const pages = Math.max(1, Math.ceil(result.length / perPage));
  currentPage = Math.min(currentPage, pages);
  const start = (currentPage - 1) * perPage;
  $("#productGrid").innerHTML = result.slice(start, start + perPage).map(productCard).join("") || `<p>No products found.</p>`;
  $("#pagination").innerHTML = Array.from({ length: pages }, (_, index) => {
    const page = index + 1;
    return `<button class="${page === currentPage ? "active" : ""}" type="button" data-page="${page}">${page}</button>`;
  }).join("");
}

function renderHome() {
  $("#categoryGrid").innerHTML = categories.slice(1).map((category, index) => {
    const productForCategory = products.find((product) => product.category === category);
    const image = productForCategory?.image || products[index % products.length].image;
    return `<article class="category-card" data-category-card="${category}"><img src="${image}" alt="${category}" /><div><h3>${category}</h3><span>Explore collection</span></div></article>`;
  }).join("");
  const featured = ["Women Fashion", "Shoes & Slippers", "Beauty Accessories", "Stationery"]
    .map((category) => products.find((product) => product.category === category))
    .filter(Boolean);
  $("#featuredProducts").innerHTML = featured.map(productCard).join("");
}

function renderFilters() {
  const options = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  $("#categoryFilter").innerHTML = options;
  $("#adminCategory").innerHTML = categories.slice(1).map((category) => `<option value="${category}">${category}</option>`).join("");
}

function addToCart(id) {
  const item = cart.find((entry) => entry.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  updateCartCount();
  saveDatabase();
  showToast("Product added to cart");
}

function updateCartCount() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  if (!cart.length) {
    $("#cartItems").innerHTML = `<div class="order-card"><h3>Your cart is empty</h3><p>Add products to continue shopping.</p></div>`;
  } else {
    $("#cartItems").innerHTML = cart.map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return `<article class="cart-row">
        <img src="${product.image}" alt="${product.name}" />
        <div><h3>${product.name}</h3><p>${money(product.price)} × ${item.qty}</p><div class="qty-actions"><button data-dec="${item.id}">-</button><strong>${item.qty}</strong><button data-inc="${item.id}">+</button></div></div>
        <button class="remove-btn" type="button" data-remove="${item.id}">Remove</button>
      </article>`;
    }).join("");
  }
  const subtotal = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.qty, 0);
  $("#subtotal").textContent = money(subtotal);
  $("#total").textContent = money(subtotal ? subtotal + 99 : 0);
}

function renderDetails() {
  const product = selectedProduct;
  $("#detailsWrap").innerHTML = `<img src="${product.image}" alt="${product.name}" />
    <div class="details-panel">
      <p class="eyebrow">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.name} is a stylish, e-commerce ready product with category support, image display, wishlist, cart, and checkout flow.</p>
      <p class="price">${money(product.price)}</p>
      <p>Rating: ${product.rating} / 5</p>
      <div class="hero-actions">
        <button class="primary-btn" type="button" data-add-cart="${product.id}">Add to Cart</button>
        <button class="secondary-btn" type="button" data-page-link="products">Back to Products</button>
      </div>
    </div>`;
}

function renderOrders() {
  $("#ordersList").innerHTML = orders.map((order) => `<article class="order-card"><h3>${order.id}</h3><p>${order.items}</p><p>Total: <strong>${money(order.total)}</strong></p><span class="status">${order.status}</span></article>`).join("");
}

function renderAdmin() {
  $("#adminProducts").textContent = products.length;
  $("#adminOrders").textContent = orders.length;
  $("#adminOrdersList").innerHTML = orders.map((order) => `<article class="order-card"><h3>${order.id}</h3><p>${order.items}</p><label>Status<select data-status="${order.id}"><option>${order.status}</option><option>Confirmed</option><option>Packed</option><option>Shipped</option><option>Delivered</option></select></label></article>`).join("");
}

document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page-link]");
  if (pageLink) navigate(pageLink.dataset.pageLink);

  const addButton = event.target.closest("[data-add-cart]");
  if (addButton) addToCart(Number(addButton.dataset.addCart));

  const wishButton = event.target.closest("[data-wishlist]");
  if (wishButton) {
    const id = Number(wishButton.dataset.wishlist);
    wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
    saveDatabase();
    renderProducts();
    renderHome();
  }

  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton) {
    selectedProduct = products.find((product) => product.id === Number(detailsButton.dataset.details));
    navigate("details");
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    currentPage = Number(pageButton.dataset.page);
    renderProducts();
  }

  const categoryCard = event.target.closest("[data-category-card]");
  if (categoryCard) {
    $("#categoryFilter").value = categoryCard.dataset.categoryCard;
    currentPage = 1;
    navigate("products");
  }

  const categoryShortcut = event.target.closest("[data-category-shortcut]");
  if (categoryShortcut) {
    $("#categoryFilter").value = categoryShortcut.dataset.categoryShortcut;
    currentPage = 1;
    navigate("products");
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    cart = cart.filter((item) => item.id !== Number(remove.dataset.remove));
    updateCartCount();
    saveDatabase();
    renderCart();
  }
  const inc = event.target.closest("[data-inc]");
  if (inc) {
    cart.find((item) => item.id === Number(inc.dataset.inc)).qty += 1;
    updateCartCount();
    saveDatabase();
    renderCart();
  }
  const dec = event.target.closest("[data-dec]");
  if (dec) {
    const item = cart.find((entry) => entry.id === Number(dec.dataset.dec));
    item.qty = Math.max(1, item.qty - 1);
    updateCartCount();
    saveDatabase();
    renderCart();
  }
});

document.addEventListener("change", (event) => {
  const statusSelect = event.target.closest("[data-status]");
  if (!statusSelect) return;
  const order = orders.find((entry) => entry.id === statusSelect.dataset.status);
  if (!order) return;
  order.status = statusSelect.value;
  saveDatabase();
  renderOrders();
  showToast("Order status updated");
});

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("veloraMartTheme", document.body.classList.contains("dark") ? "dark" : "light");
});
$(".menu-toggle").addEventListener("click", () => {
  const header = $(".site-header");
  const open = header.classList.toggle("menu-open");
  $(".menu-toggle").setAttribute("aria-expanded", String(open));
});

["searchInput", "categoryFilter", "sortFilter"].forEach((id) => {
  $(`#${id}`).addEventListener("input", () => {
    currentPage = 1;
    renderProducts();
  });
});
$("#clearFilters").addEventListener("click", () => {
  $("#searchInput").value = "";
  $("#categoryFilter").value = "All";
  $("#sortFilter").value = "featured";
  currentPage = 1;
  renderProducts();
});
$("#topSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    $("#searchInput").value = event.target.value;
    currentPage = 1;
    navigate("products");
  }
});

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  currentUser = { role: "user", email: "user@veloramart.com" };
  saveDatabase();
  showToast("User login successful");
  navigate("products");
});
$("#adminLogin").addEventListener("click", () => {
  currentUser = { role: "admin", email: "admin@veloramart.com" };
  saveDatabase();
  showToast("Admin login successful");
  navigate("admin");
});
$("#registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  currentUser = { role: "user", email: "newuser@veloramart.com" };
  saveDatabase();
  showToast("Registration successful. Confirmation email simulated.");
  navigate("products");
});
$$("[data-auth-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    $("#loginForm").classList.toggle("active", tab.dataset.authTab === "login");
    $("#registerForm").classList.toggle("active", tab.dataset.authTab === "register");
  });
});
$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!cart.length) return showToast("Cart is empty");
  const total = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.qty, 0) + 99;
  orders.unshift({ id: `ORD-${Date.now().toString().slice(-4)}`, items: `${cart.length} product(s)`, total, status: "Confirmed" });
  cart = [];
  updateCartCount();
  saveDatabase();
  showToast("Order placed. Email confirmation sent.");
  navigate("orders");
});
$("#productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  products.unshift({
    id: Date.now(),
    name: $("#adminName").value,
    category: $("#adminCategory").value,
    price: Number($("#adminPrice").value),
    image: $("#uploadPreview").src,
    tag: "Admin",
    rating: 4.0
  });
  event.target.reset();
  saveDatabase();
  showToast("Product added by admin");
  renderAdmin();
  renderProducts();
  renderHome();
});
$("#imageUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  $("#uploadPreview").src = URL.createObjectURL(file);
});

if (localStorage.getItem("veloraMartTheme") === "dark") {
  document.body.classList.add("dark");
}

renderFilters();
renderHome();
renderProducts();
renderOrders();
renderAdmin();
updateCartCount();
navigate(location.hash.replace("#", "") || "home");
