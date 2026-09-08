# mock.shop starter

**A Shopify Hydrogen storefront that runs the moment you clone it.** No store, no token, no account. It reads [mock.shop](https://mock.shop), a real Storefront API with more than 100 fictional catalogs to build against.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md) [![Hydrogen 2026.4](https://img.shields.io/badge/Hydrogen-2026.4-95BF47?logo=shopify&logoColor=white)](https://shopify.dev/docs/storefronts/headless/hydrogen) ![Node 22 or 24](https://img.shields.io/badge/Node-22%20%7C%2024-339933?logo=node.js&logoColor=white)

[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-1269D3?logo=stackblitz&logoColor=white)](https://stackblitz.com/github/Shopify/mock-shop-starter) [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-151515?logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/Shopify/mock-shop-starter) [![Open in Bolt](https://img.shields.io/badge/Open%20in-Bolt-000000?logo=bolt&logoColor=white)](https://bolt.new/github.com/Shopify/mock-shop-starter)

<!-- Deploy with Vercel: GA Hydrogen targets Oxygen. Decision pending on linking Hydrogen's preview Next.js template here. -->

<table>
  <tr>
    <td width="50%"><img src=".github/assets/store-default.jpg" alt="Products page of the default mock.shop store: slides, sweatpants, t-shirts, and hoodies" width="100%"><br><sub><code>mock.shop</code> · the default</sub></td>
    <td width="50%"><img src=".github/assets/store-pets.jpg" alt="Products page of Paws and Whimsy: pet beds and carriers" width="100%"><br><sub><code>pets.mock.shop</code></sub></td>
  </tr>
  <tr>
    <td width="50%"><img src=".github/assets/store-coffee.jpg" alt="Products page of Sunbeam Brew Co.: coffee bags, mugs, and pour-over gear" width="100%"><br><sub><code>coffee.mock.shop</code></sub></td>
    <td width="50%"><img src=".github/assets/store-keyboards.jpg" alt="Products page of ClickyCanvas: keyboard frames, switches, and keycaps" width="100%"><br><sub><code>mechanical-keyboards.mock.shop</code></sub></td>
  </tr>
</table>

Same project, four stores. The only difference between these screenshots is one line in `.env`.

<table>
  <tr>
    <td width="33%" valign="top">
      <h3>⚡ Zero setup</h3>
      Clone, install, run. mock.shop is a public Storefront API, so there's nothing to sign up for and no token to paste.
    </td>
    <td width="33%" valign="top">
      <h3>🏪 100+ stores</h3>
      Candles, coffee, pets, telescopes, typewriters. Pick the catalog that looks like what you're building and switch with one variable.
    </td>
    <td width="33%" valign="top">
      <h3>🤖 Agent-ready</h3>
      <code>AGENTS.md</code>, <code>llms.txt</code>, and Cursor rules already know how mock.shop works, so Claude Code, Cursor, and Copilot do too.
    </td>
  </tr>
</table>

## Quickstart

**Requirements:** Node.js 22 or 24.

```bash
git clone https://github.com/Shopify/mock-shop-starter.git my-store
cd my-store
cp .env.example .env
npm install
npm run dev
```

Open http://localhost:3000. You're browsing the default mock.shop store: sneakers, hoodies, t-shirts, and slides.

<details>
<summary>Prefer a scaffolder?</summary>
<br>

Shopify's own scaffolder produces this same project in mock mode:

```bash
npm create @shopify/hydrogen@latest -- --mock-shop
```

Or point it at this repository:

```bash
npm create @shopify/hydrogen@latest -- --template Shopify/mock-shop-starter
```

</details>

## Pick a store

mock.shop isn't one store, it's a catalog of them. Every store lives on its own host and serves the same Storefront API at `/api`, and because mock.shop mirrors the Storefront API, a query you write against it runs unchanged against a real store. To build against one, set a single variable in `.env` and restart the dev server:

```bash
PUBLIC_STORE_DOMAIN=candles.mock.shop
```

Leave `PUBLIC_STOREFRONT_API_TOKEN` empty. Hydrogen recognizes any mock.shop host and sends no token.

**A few to try:**

| Store | Host | What it sells |
| --- | --- | --- |
| Amber & Aura | `candles.mock.shop` | Handcrafted candles and home scents |
| Sunbeam Brew Co. | `coffee.mock.shop` | Single-origin beans and brewing kits |
| Paws and Whimsy | `pets.mock.shop` | Gear and accessories for pets |
| ClickyCanvas | `mechanical-keyboards.mock.shop` | Custom keyboard kits and components |
| StellarVista Optics | `telescopes-retail.mock.shop` | Telescopes and stargazing accessories |
| Inkwell Echoes | `typewriters.mock.shop` | Restored vintage typewriters and ribbons |

Each store describes its own categories, collections, and product counts at `https://<store>.mock.shop/llms.txt`. The whole directory is below, and it refreshes itself weekly.

<!-- STORE_DIRECTORY:START -->
119 stores, generated from [mock.shop/llms.txt](https://mock.shop/llms.txt) on 2026-09-08. Set `PUBLIC_STORE_DOMAIN` to the host to use a store.

<details>
<summary>Show all 119 stores</summary>

| Store | Host | What it sells | Categories |
| --- | --- | --- | --- |
| Mock.shop (default) | `mock.shop` | High quality commerce data for your storefront | Accessories, Bottoms, Featured, Men, Shoes, Tops, Unisex, Women |
| Evergreen Echoes | `3dpinecones.mock.shop` | We craft exquisite, 3D-printed pinecones that capture the timeless beauty of nature for your home decor | Candle Holders, Garden Sculptures, Potpourri, Seasonal & Holiday Decorations, Window Valances & Cornices, Wreaths & Garlands, Artificial Flora, Artwork |
| VigorVibe Active | `activewear-dropship.mock.shop` | High-performance activewear and sleek gear designed to help you crush your workout with confidence and vibrant flair | Activewear Tops, Leggings, Sports Bras, Activewear Vests & Jackets, Belt Bags |
| Elysian Thread | `apparel.mock.shop` | Curated timeless apparel featuring natural fabrics and clean tailoring for the modern woman's sophisticated wardrobe | Blouses, Loungewear Sets, Outfit Sets, Trousers, Cardigans, Blazers, Clothing Tops, Coats & Jackets |
| Velvet & Vine Boutique | `apparel-accessories.mock.shop` | We offer a curated collection of premium accessories crafted from rich, tactile materials for your everyday style | Hats, Scarves & Shawls, Belts, Bracelets, Brooches & Lapel Pins, Card Cases, Gloves & Mittens, Wallets |
| Zenith Motion | `apparel-athleisure.mock.shop` | Premium performance apparel designed to transition seamlessly from your toughest studio workout to your daily routine | Dynamic Motion Training Gear, Foundation Studio Essentials, Urban Commuter Layers, Versatile Performance Tops |
| EchoPulse Gear | `apparel-band-merch.mock.shop` | Fuel your fandom with high-energy apparel, limited-edition tour merch, and exclusive accessories for music lovers | Clothing Patches, Autographs, Posters, Prints, & Visual Artwork, Hoodies, T-Shirts, Belts, Hats, Mugs |
| Velvet Horizon Boutique | `apparel-boutique.mock.shop` | A sophisticated gallery of unique apparel and handcrafted accessories from the world's most visionary new designers | Belts, Coats & Jackets, Dresses, Handbags, Clothing Tops, Earrings, Necklaces, Rings |
| Ethereal Vows Atelier | `apparel-bridal.mock.shop` | Curating exquisite bridal gowns and heirloom accessories designed to make your special day feel truly enchanting | Bridal Veils, Dresses, Hair Accessories, Wedding Dresses, Earrings, Necklaces, Bracelets, Bridesmaid Dresses |
| Velvet Pulse Boutique | `apparel-dropship.mock.shop` | Curated high-energy fashion for your next big moment, featuring bold silhouettes and statement accessories | Dresses, Necklaces, Outerwear, Clothing Tops, Handbags |
| BrightSight Optics | `apparel-eyewear.mock.shop` | Curated collection of stylish prescription glasses and premium sunglasses designed for your everyday adventures | Safety Glasses, Smart Glasses, Clothing Accessories, Eyeglasses, Sunglasses |
| Lumina Grain | `apparel-handbags.mock.shop` | Curated leather handbags and accessories designed with minimalist sophistication and enduring quality | Bracelets, Bucket Bags, Clutch Bags, Handbags, Handbag & Wallet Accessories, Wallets, Cosmetic & Toiletry Bags, Earrings |
| Velvet & Vellum | `apparel-highticket.mock.shop` | A boutique collection of timeless luxury tailoring, artisanal knitwear, and premium leather essentials | Coats & Jackets, Dresses, Sweaters, Handbags, Perfume Extracts |
| RadiantCurve Collective | `apparel-inclusive.mock.shop` | A size-inclusive fashion destination offering premium apparel tailored for comfort, confidence, and effortless style | Activewear, Dresses, Leggings, Skirts, Shirts, Suits, Belts, Outerwear |
| UrbanVantage Collective | `apparel-intl.mock.shop` | Curated, travel-ready fashion designed for the modern globetrotter seeking versatility and refined comfort | Pants, Coats & Jackets, Dresses, Handbags, Shirts, Shoes, Sweaters, Backpacks |
| Lumina Form | `apparel-jewelry.mock.shop` | Curated minimalist jewelry and timepieces featuring architectural lines and refined metallic textures | Watches, Jewelry Boxes, Bracelets, Earrings, Necklaces, Rings |
| BrightSprout Kids | `apparel-kids.mock.shop` | We offer a vibrant collection of comfortable, durable, and playful clothing designed for every stage of childhood | Dresses, Outfit Sets, Pajamas, Throw Blankets, Pants, Shirts, Coats & Jackets, Gloves & Mittens |
| Everbloom Collective | `apparel-large-catalog.mock.shop` | A curated destination for modern apparel, footwear, and accessories designed for the entire family | Watches, Activewear Tops, Baby & Children's Clothing, Coats & Jackets, Cosmetics, Pants, Robes, Shoes |
| Velvet Horizon | `apparel-lingerie.mock.shop` | Curating elegant, inclusive intimates crafted from cloud-soft fabrics in a timeless, sophisticated color palette | Bras, Nightgowns, Robes, Shapewear, Bodysuits, Cheeky Panties, Bath Salts & Soaks, Perfumes & Colognes |
| Velvet Sunday | `apparel-loungewear.mock.shop` | Curated loungewear essentials crafted from premium, butter-soft fabrics for your most restful moments | Candles, Loungewear Sets, Pajamas, Robes, Shorts, Blankets, Socks, Sweatpants |
| Noble Stitch Atelier | `apparel-made-to-order.mock.shop` | We craft exquisite, made-to-measure garments using premium fabrics and timeless techniques for a flawless fit | Dress Shirts, Pants, Suits, Belts, Coats & Jackets |
| Steady Thread Co. | `apparel-menswear.mock.shop` | Curated menswear staples crafted with durable fabrics and timeless fits for your everyday rotation | Scarves & Shawls, Shirts, Belts, Cargo Pants, Hats, Jeans, Sweaters, T-Shirts |
| Summit Drift Outfitters | `apparel-outdoor.mock.shop` | High-performance apparel and essential gear designed to keep you comfortable on every rugged mountain trail | Shirts, Athletic Socks, Boots, Coats & Jackets, Pants, Gloves & Mittens, Hats, Camping Lights & Lanterns |
| LunaCurve Collective | `apparel-plus.mock.shop` | A curated boutique offering premium, fashion-forward apparel designed to empower and flatter every unique body | Activewear Pants, Activewear Tops, Coats & Jackets, Dresses, Jeans, Lingerie, Robes, Shirts |
| VividThread Collective | `apparel-pod.mock.shop` | Curated graphic apparel featuring striking typography and artistic illustrations for everyday comfort and style | T-Shirts, Coats & Jackets, Hats, Hoodies, Loungewear, Sweatshirts, Tank Tops, Posters |
| Victory Peak Gear | `apparel-retail.mock.shop` | We provide vibrant apparel and game-day essentials to celebrate every winning moment with your favorite crowd | Decorative Flags, Mugs, Posters, Coffee & Tea Cups, Gloves & Mittens, Hats, Jerseys, Scarves & Shawls |
| StridePulse | `apparel-sneakers.mock.shop` | Premium lifestyle footwear blending modern street aesthetics with high-performance comfort for your daily adventures | Activewear, Athletic Shoes, Backpacks, Boots, Insoles & Inserts, Sandals, Shoe Care Kits, Sunglasses |
| Summit Glider Gear | `apparel-snowwear.mock.shop` | High-performance snowboards and rugged alpine apparel engineered for bold riders conquering the winter peaks | Coats & Jackets, Headwear, Pants, Ski & Snowboard Goggles, Snowboard Bindings, Snowboards, Snowboard Bags, Sunscreen |
| VibePulse Studio | `apparel-streetwear.mock.shop` | Curated streetwear essentials featuring heavy textures, sharp graphics, and limited-edition seasonal drops | Hoodies, Pants, T-Shirts, Coats & Jackets, Hats |
| ThreadJoy Collective | `apparel-subscription.mock.shop` | We deliver premium cotton tees and playful socks paired with collectible stories to brighten your daily routine | Handkerchiefs, T-Shirts, Crew Socks, Sleepwear & Loungewear |
| Golden Tide Collective | `apparel-swim.mock.shop` | Curated resort wear and vibrant swimwear designed to bring a splash of color to your perfect coastal getaway | Classic Bikinis, One-Piece Swimsuits, Beach Towels, Bucket Hats, Cover Ups, Shirts, Sunglasses, Sunscreen |
| Golden Era Finds | `apparel-vintage.mock.shop` | We offer a handpicked collection of unique vintage apparel and accessories designed to bring history to your wardrobe | Coats & Jackets, Dresses, Jeans, Handbags, Perfume Oils, Vases, Brooches & Lapel Pins, Earrings |
| TempoBloom Timepieces | `apparel-watches.mock.shop` | A curated collection of elegant, ready-to-wear wristwatches designed to perfectly complement your unique lifestyle | Watches, Medical Alarm Watches, Anklets, Bracelets, Smart Watches |
| SteadyGear Collective | `apparel-workwear.mock.shop` | Premium, durable workwear designed to keep your team comfortable, safe, and looking sharp on the job | Chef Coats & Jackets, Food Service Aprons, Belts, Coats & Jackets, Compression Socks, Hats, Scrubs, Tool Bags |
| LushPebble Aquatics | `aquascaping.mock.shop` | We provide premium aquatic plants, unique hardscape stones, and complete nano tank kits for your miniature ecosystem | Aquarium Lighting, Aquarium Rocks, Aquatic Plants, Desk Lamps, Gardening Trowels, Table Scatters, Aquariums, External & Canister Aquarium Filters |
| Sonic Haven | `audio.mock.shop` | Curated high-fidelity audio equipment and studio essentials designed for an immersive, crystal-clear listening journey | Audio & Video Cables, Audio & Video Receivers, Headphone Amplifiers, Microphone Accessories, Microphones, Over-Ear Headphones, Speakers, Turntables |
| SteadyGear Automotive | `auto-parts.mock.shop` | High-performance components and durable accessories engineered for peak vehicle reliability and control | Motor Vehicle Braking, Motor Vehicle Engine Parts, Motor Vehicle Interior Fittings, Motor Vehicle Lighting, Motor Vehicle Rims & Wheels, Motor Vehicle Suspension Parts, Oil Filters, Safety Gloves |
| Glaze & Go Collective | `bags-dropship.mock.shop` | Curated modern bags and travel essentials designed to add a vibrant pop of color and style to your daily routine | Jet-Set Accessory Accents, Urban Transit Essentials |
| Lumina Radiance Collective | `beauty-plus.mock.shop` | A curated collection of premium beauty essentials designed to celebrate every skin tone with elegance and ease | Face Makeup, Face Palettes, Makeup Brushes, Makeup Sponges, Body Butters, Body Jewelry, Candles, Eye Makeup |
| GlowBound Discovery | `beauty-subscription.mock.shop` | A monthly curation of premium beauty essentials delivered to your door in beautifully themed, gift-ready boxes | Cosmetics, Hair Care, Skin Care Kits & Sets, Candles, Personal Care Gift Sets & Kits |
| LuminaGlow Studio | `beauty-tools-dropship.mock.shop` | Elevate your daily self-care routine with our curated collection of professional-grade beauty and wellness tools | Nail Tools, Skin Care Rollers, Skin Cleansing Brushes & Systems, Face Serums, Facial Saunas |
| CloudHaven Linens | `bedding.mock.shop` | Curated natural bedding and bath essentials designed to bring effortless comfort and calm to your home sanctuary | Bath Towels, Bed Sheets, Duvet Covers, Vases, Blankets, Throw Pillows, Candles, Lamps |
| Golden Bloom Apiary Supply | `beekeeping-retail.mock.shop` | We provide friendly starter kits and essential hives to help hobbyist beekeepers nurture their own thriving colonies | Beekeeping Protective Gear, Bee Hives, Gardening, Gardening Tools, Honey Extraction Equipment, Decorative Jars, Food Storage Containers, Honey Jars |
| ZestBloom Fizz | `beverages.mock.shop` | We craft vibrant, fruit-forward botanical sodas and premium mixers designed to brighten your favorite social moments | Carbonated Water, Cocktail Shakers, Low Alcohol & Alcohol-Free Cocktail Mixes, Powdered Beverage Mixes, Soda, Tea & Infusions, Candy, Coasters |
| Golden Hour Portraits | `bookings.mock.shop` | Premium photography services for individuals, families, and professionals seeking warm, high-quality imagery | Bridal Accessories, Consulting Services, Personal Services, Business & Productivity Software, Business Services |
| Paper Haven Books | `books.mock.shop` | A cozy neighborhood sanctuary offering curated reads, beautiful journals, and charming gifts for book lovers | Art Pencils, Artwork, Bookends, Drinkware, Journals, Mugs, Pens, Pocket Notebooks |
| Amber & Aura | `candles.mock.shop` | Handcrafted candles and artisanal home scents designed to create an inviting, soulful atmosphere in every room | Candles, Incense, Incense Holders, Lamps, Sculptures & Statues, Vases, Decorative Bowls, Decorative Trays |
| Bloom & Dew Botanicals | `clean-beauty.mock.shop` | A curated collection of plant-powered skincare and beauty essentials crafted with transparent, earth-friendly ingredients | Eye Makeup, Face Makeup, Hair Styling Products, Shampoo & Conditioner, Face Moisturizers, Facial Cleansers, Bath Salts & Soaks, Candles |
| Sunbeam Brew Co. | `coffee.mock.shop` | We source and roast premium single-origin beans and craft kits to bring the ultimate café experience to your kitchen | Coffee Beans & Ground Coffee, Coffee Makers & Espresso Machines, Mugs, Coffee & Tea Sets, Food Storage Containers |
| Vault & Virtue | `collectibles.mock.shop` | A premium destination for rare trading cards, limited edition figures, and high-quality display essentials | Action Figures, Artwork, Bookends, Building Toys, Card Game Accessories, Card Games, Collectibles, Craft Storage Boxes & Cases |
| BrightHue Harbor | `craft-supplies.mock.shop` | A vibrant collection of premium art supplies, textile materials, and curated kits for makers of all skill levels | Artisan Surface Papers, Embellished Textile Works, Pigmented Studio Essentials, Precision Sculpting Tools, Textured Fiber Weaves |
| Glide Path Disc Sports | `disc-golf-dropship.mock.shop` | Providing high-quality discs, durable gear, and essential course equipment to elevate every player's game | Disc Golf Bags, Disc Golf Discs, Sunscreen, Athletic Shoes, Portable Disc Golf Baskets |
| BrightPath Creative | `ebooks-digital.mock.shop` | Practical guides and thoughtfully designed workbooks to help creative freelancers grow their business with confidence | Document Templates, E-Books, Planners, Videos |
| Joyful Gatherings Studio | `family-pod.mock.shop` | We craft custom apparel and keepsakes to make your family celebrations and milestones truly unforgettable | Activewear Tops > T-Shirts, Bridal Accessories, Clothing Tops > T-Shirts, Loungewear Sets, Outfit Sets, Tank Tops, Hats, One-Pieces |
| Culture Craft Kitchen | `fermentation.mock.shop` | We provide premium fermentation kits to help you craft delicious, probiotic-rich ferments in your own home | Hot Sauce Crafting Suite, Kimchi Prep Systems, Kombucha Brewing Essentials, The Sourdough Starter Kit |
| Zenith Motion | `fitness-dropship.mock.shop` | Premium space-saving fitness gear and recovery tools designed to help you reach your peak potential from home | Exercise Equipment Mats, Free Weight Sets, Yoga & Pilates Mats, Cardio Machine Accessories & Parts, Manual Massage Tools |
| Velvet Aura | `fragrance.mock.shop` | A refined collection of artisanal perfumes, colognes, candles, and room sprays designed to elevate your living space | Fragrance Oil, Perfume Extracts, Perfume Oils, Candles, Scented Sachets |
| Haven & Hearth | `furniture.mock.shop` | We offer a refined collection of handcrafted wooden furniture and textured upholstery designed for peaceful homes | Cabinets & Storage, Beds & Accessories, Desks, Dining Chairs, Dining Tables, Rugs, Sectional Sofas, Floor Lamps |
| Beam & Byte | `gadgets.mock.shop` | Curated modern electronics and sleek desktop essentials designed to keep your digital life organized and powered up | Over-Ear Headphones, Extension Cables, Laptop Stands, Mobile Phone Stands, Tablet & E-Book Reader Screen Protectors, Tablet Computer Accessories, USB & FireWire Hubs, Battery Accessories |
| BeamPulse Tech | `gadgets-dropship.mock.shop` | We curate sleek, portable gadgets and smart accessories designed to keep you connected and inspired on the move | Desktop Organizers, General Purpose Battery Chargers, Projector Accessories, Backpacks, Network Cards & Adapters |
| PixelBloom Assets | `game-assets-digital.mock.shop` | A vibrant collection of high-quality 3D models, textures, and sprites crafted for indie game developers | 3D Modeling Software, Graphic Design & Illustration Software, Software Development Tools, Animation Editing Software, Audio Accessories |
| Sunlit Sprout Collective | `garden.mock.shop` | We offer thoughtfully curated tools and natural decor to help your outdoor sanctuary flourish all season long | Gardening Trowels, Plant Stakes, Tool Sets, Watering Cans, Candles, Garden Sculptures, Pots & Planters, Seeds |
| SproutJoy Gardening | `garden-dropship.mock.shop` | We provide ergonomic tools and compact systems to help your home garden flourish with ease and vibrant life | Pruning Shears, Pressure Washers, Gardening Trowels, Lawn Ornaments & Garden Sculptures, Watering Cans |
| Brightly Home & Hearth | `general-store.mock.shop` | Your friendly local source for quality kitchen essentials, thoughtful gifts, and everyday home necessities | Drinkware, Food Storage Containers, Kitchen Tools & Utensils, Kitchen Towels, Business Card Cases, Stationery, Candles, Gift Wrapping |
| Sunny Harvest Market | `grocery-retail.mock.shop` | Your neighborhood destination for farm-fresh produce, artisanal bakery treats, and everyday household essentials | Bakery Assortments, Canned & Jarred Vegetables, Chips, Citrus Fruits, Meat, Baking Mixes, Croissants, Fresh & Frozen Vegetables |
| Steady Peak Grooming | `grooming.mock.shop` | Premium essentials for hair, skin, and beard designed to keep you looking sharp and feeling your absolute best | Refined Grooming Essentials, Sculpt and Style Collection, The Daily Ritual Shave Set, The Nomad Traveler Kit |
| Lumea Strand | `haircare.mock.shop` | Premium salon-grade haircare essentials crafted to nourish, revitalize, and celebrate your unique hair journey | Bath & Body, Shampoo & Conditioner, Hair Masks, Hair Pomades & Waxes, Hair Sprays, Hair Styling Products, Hair Treatments, Hairbrushes & Combs |
| LuminaStrand | `haircare-dropship.mock.shop` | Premium salon-grade styling tools and accessories designed to give you professional, glossy results at home | Hair Curlers, Hair Dryers, Hair Serums, Hair Straighteners, Hair Styling Tool Accessories |
| SteadyBuild Depot | `hardware.mock.shop` | Your go-to source for professional-grade hand tools, durable hardware, and organized workshop storage solutions | Carpenter Belts, Laser Levels, Power Tool Batteries, Rolling Tool Boxes, Tape Measures, Work Lights, Brad Nails, Deck Screws |
| Patchwork Pursuit | `hobby-pod.mock.shop` | Curated graphic apparel featuring witty designs for hobbyists, makers, and outdoor explorers | Activewear, Art & Craft Kits, Board Games, Crew Socks, Lapel Pins, Shopping Totes, Sweatshirts, T-Shirts |
| Havenly Nest | `home-decor.mock.shop` | We offer a handpicked collection of sculptural decor, soft textiles, and artisanal accents to elevate your living space | Throw Blankets, Throw Pillows, Artificial Flora, Artwork, Baskets, Bookends, Decorative Bowls, Mirrors |
| Spruce Haven | `home-dropship.mock.shop` | We offer clever tools and smart home gadgets designed to make your daily routines effortless and joyfully organized | Household Cleaning Supplies, Kitchen Appliances, Kitchen Organizers, Air Fresheners, Household Cleaning Products |
| Havenly Nest | `home-large-catalog.mock.shop` | Discover thoughtfully designed furniture and decor essentials to create your perfectly balanced sanctuary | Household Storage Baskets, Vases, Bath Towels & Washcloths, Desks, Artificial Flora, Bath Mats & Rugs, Office Chairs, Shelving |
| Lumina Form Collective | `home-lighting.mock.shop` | Curated architectural furnishings and elegant lighting solutions designed to bring warmth and harmony to every room | Mirrors, Candle Holders, Clocks, Floor Lamps, Sculptures & Statues, Table Lamps, Vases, Decorative Bowls |
| Havenly Hearth Goods | `home-retail.mock.shop` | A charming neighborhood shop offering essential kitchenware, cozy linens, and thoughtful decor for daily living | Dinnerware, Drinkware, Backrest Pillows, Candle Holders, Candles, Decorative Bowls, Decorative Trays, Picture Frames |
| SteadyWorks Supply Co. | `industrial.mock.shop` | Providing high-performance industrial equipment and essential operational supplies for your professional workspace | Dollies & Hand Trucks, Industrial Shelving, Industrial Storage Accessories, Moving & Shipping Boxes, Packing Materials, Pallet Jacks, Construction, Safety Glasses |
| Glimmerly | `jewelry-dropship.mock.shop` | Curated gold-tone jewelry and sparkling accessories designed to make every day feel like a special occasion | Earrings, Necklaces, Rings, Bracelets, Watches |
| SunnySprout Kids | `kids-dropship.mock.shop` | We offer cheerful, soft-fabric clothing and playful accessories designed to make every childhood moment pop | Dresses, Outerwear, Pajamas, Hair Accessories, Shirts |
| Copper & Clover Kitchen | `kitchen.mock.shop` | A curated collection of elegant, high-performance kitchen essentials designed to inspire your daily cooking journey | Bowls, Measuring Cups, Serveware, Stock Pots, Kitchen Knives, Mandoline Slicers, Aprons, Candles |
| Zestful Kitchen Joy | `kitchen-dropship.mock.shop` | Discover vibrant tools and clever gadgets designed to simplify cooking and bring excitement to your kitchen routine | Kitchen Knives, Kitchen Slicers, Serveware, Food Storage Containers, Juicers |
| LuminaFlow | `lighting-dropship.mock.shop` | Transform your home with smart, app-controlled lighting solutions designed to set the mood for every moment | Desk Lamps, Light Ropes & Strings, Wall Light Fixtures, Night Lights & Ambient Lighting, Smart Speakers |
| Lumina Silk | `makeup.mock.shop` | Curated essentials for a luminous, sculptural look with a focus on neutral tones and sophisticated skin textures | Eye Shadows, Face Moisturizers, Face Primers, Mascaras, Blushes, Lip & Cheek Stains, Lip Balms, Lip Gloss |
| Summit Trace Prints | `map-posters-pod.mock.shop` | Custom topographic art featuring your favorite national parks and hiking trails printed on premium archival paper | Greeting Cards, Posters, Prints, Decorative Tapestries, Mugs, Outdoor Blankets, Paintings, Photographs |
| ClickyCanvas | `mechanical-keyboards.mock.shop` | Curated components and DIY kits to build your perfect custom mechanical keyboard one click at a time | Barebones Keyboards, Desk Organizers, Keyboard & Mouse Wrist Rests, Keyboard PCBs, Keyboard Switches, Keyboard Stabilizers, Keyboard Stickers & Decals, Mice & Trackballs |
| Sunny Nest Goods | `mugs-pod.mock.shop` | Curated home essentials and charming gifts featuring vibrant, playful illustrations to celebrate every season | Coasters, Mugs, Chair & Sofa Cushions, Greeting Cards, Holiday Ornaments, Kitchen Towels, Prints, Shopping Totes |
| SporeJoy Gardens | `mushroom-kits.mock.shop` | We provide premium cultivation kits and organic supplies to help you harvest fresh mushrooms right from your kitchen | Seeds, Cultivating Tools, Fertilizers, Plant Stakes, Sands & Soils, Food Dehydrators, Food Graters, Food Peelers |
| Sonorous Pulse | `music-digital.mock.shop` | A curated collection of premium royalty-free audio, soundscapes, and cinematic effects for creators and storytellers | Digital Music Downloads, Sound Editing Software, Video Editing Software |
| Golden Hearth Provisions | `pantry.mock.shop` | We offer a vibrant selection of artisanal pantry staples, handcrafted snacks, and curated gift boxes for food lovers | Herbs & Spices, Condiments & Sauces, Cooking Oils, Jams & Jellies, Serving Platters, Crackers, Trail & Snack Mixes, Chocolate |
| StitchBloom Studio | `patterns-digital.mock.shop` | Modern, downloadable sewing patterns and creative inspiration for makers to design their own unique capsule wardrobe | Digital Sewing Patterns, E-Books, Videos |
| Everlasting Pawtraits | `pet-portraits.mock.shop` | We hand-paint beautiful, custom portraits of your cherished pets to celebrate the bond you share | Paintings, Personalized ID Collars, Picture Frames, Candles, Prints |
| Paws and Whimsy | `pets.mock.shop` | A vibrant boutique offering durable, stylish gear and delightful accessories for your beloved furry companions | Bowls, Catnip Toys, Dog Toys, Food Storage Containers, Pet Beds, Pet Carriers & Crates, Pet Apparel, Pet Collars & Harnesses |
| JoyfulPaws Tech | `pets-dropship.mock.shop` | We offer innovative, easy-to-clean smart tools and interactive toys designed to make pet care simple and fun | Dog Toys, Pet Carrier & Crate Accessories, Pet Grooming Supplies, Pet Training Aids, Travel Bowls |
| GlideGear Essentials | `phone-accessories-dropship.mock.shop` | Premium accessories and protective gear designed to keep your favorite devices stylishly secure and fully powered | Mobile Phone Cases, Mobile Phone Stands, Laptop Sleeves, Mobile Phone Car Mounts, Mobile Phone Screen Protectors |
| Bloom & Bold Studio | `phone-cases-pod.mock.shop` | Elevate your tech with vibrant botanical, abstract, and typographic designs crafted for everyday inspiration | Artwork, Journals, Mobile Phone Cases, Mobile Phone Charms, Mobile Phone Skins & Wraps, Mobile Phone Stands, Wallets, Keychains |
| CanvasBloom Studio | `printables-digital.mock.shop` | Instant digital downloads featuring elegant botanical prints, modern typography, and whimsical art for all ages | Digital Goods & Currency |
| VelocityVibe Racers | `printed-racecars.mock.shop` | We craft high-performance 3D printed race cars and modular track components designed for enthusiasts of all ages | Toy Race Car & Track Sets, Clothing Patches, Lawn Ornaments & Garden Sculptures, Remote Control Toys, 3D Printer Accessories, Building Toys, Craft Kits, Play Vehicle Accessories |
| Lumina Haven Studio | `salon.mock.shop` | A tranquil sanctuary for premium hair styling, rejuvenating facials, and holistic spa wellness treatments | Facial Cleansers, Hair Styling Products, Nail Polishes, Shampoo & Conditioner |
| Lumina Botanica | `skincare.mock.shop` | We blend potent clinical actives with soothing plant extracts to create simple, effective daily skincare rituals | Toners, Eye Creams, Face Moisturizers, Face Serums, Facial Cleansers, Skin Care Masks & Peels, Skin Care Rollers, Sunscreen |
| DewyGlow Collective | `skincare-dropship.mock.shop` | A curated collection of trending serums, masks, and tools designed to give you that perfect, healthy-looking glow | Face Moisturizers, Face Serums, Facial Cleansers, Skin Care Masks & Peels, Skin Care Rollers |
| PixelPulse Hub | `software-digital.mock.shop` | A curated marketplace offering premium creative software, essential productivity tools, and unique indie gaming finds | Multimedia & Design Software, Business & Productivity Software, Digital Goods & Currency, Video Game Software |
| StridePulse Active | `sporting-goods.mock.shop` | Premium athletic gear and durable equipment designed to keep every member of your family moving with confidence | Activewear, Sports & Agility Cones, Athletic Shoes, Basketball, Boating & Water Sports, Camping & Hiking, Soccer Bags & Carriers, Soccer Protective Gear |
| Urban Pulse Collective | `streetwear-dropship.mock.shop` | Curated streetwear essentials featuring oversized fits, gritty graphics, and high-energy urban style | Concrete Jungle Essentials, Industrial Motion Gear |
| VividThread Collective | `streetwear-pod.mock.shop` | Curated streetwear featuring bold original graphics and modern oversized fits for your everyday urban rhythm | Pants, Belts, Bomber Jackets, Hats, Hoodies, Shorts, T-Shirts, Tank Tops |
| Bloom Motion Studio | `studio.mock.shop` | A vibrant neighborhood hub for creative movement, inspiring workshops, and high-quality gear for your active lifestyle | Activewear, Belt Bags, Yoga & Pilates Blocks, Yoga & Pilates Mats |
| VitalityCore Labs | `supplements.mock.shop` | We provide premium, science-backed nutritional powders and supplements designed to support your daily wellness goals | Collagen, Herbal Supplements, Multimineral Supplements, Multivitamin Supplements, Creatine, Protein Supplements, Branched-Chain Amino Acid (BCAA), CBD Supplements |
| StellarVista Optics | `telescopes-retail.mock.shop` | We provide premium telescopes and precision accessories to help stargazers explore the beauty of the night sky | Camera Lenses, Lens Filters, Reflector Telescopes, Telescope Accessories, Telescope Bags, Travel Tripods, Binoculars, Flashlights |
| BrightSpark Play | `toys.mock.shop` | A curated collection of colorful, creative toys designed to spark joy and discovery for children of all ages | Building Toys, Artwork, Blankets, Craft Kits, Outdoor Games, Plush Toys, Musical Toys |
| JoyJolt Collective | `toys-dropship.mock.shop` | A vibrant hub for sensory toys, interactive companions, and creative kits designed to bring pure delight to your desk | Action & Toy Figures, Executive Toys, Sensory Toys, Activity Toys, Board Games |
| Inkwell Echoes | `typewriters.mock.shop` | We specialize in fully restored vintage typewriters, premium ribbons, and essential parts for dedicated writers | Art & Craft Paper, Typewriters, Hand Tool Sets, Pliers, Clocks, Compression Springs, Bookends, Pens |
| Canvas Bloom Studio | `wall-art.mock.shop` | Custom wall art collections featuring fine photography and abstract prints tailored to fit your unique living space | Hanging & Wall Vases, Home Decor Decals, Paintings, Photographs, Picture Frames, Prints, Sculptures & Statues, Posters |
| Canvas & Clover | `wall-art-pod.mock.shop` | Elevate your walls with our premium collection of gallery-grade abstract prints, botanical art, and custom sets | Posters, Prints, & Visual Artwork, Prints, Photographs, Picture Frames, Portfolios, Wall Murals |
| Velocis Wristwear | `watches-dropship.mock.shop` | Curated collection of versatile timepieces and custom straps designed to elevate your daily style with modern flair | Bracelets, Watch Bands, Watches, Jewelry Sets, Watch Storage Boxes & Rolls |
| Vibrant Pulse Wellness | `wellness-digital.mock.shop` | Empowering fitness journeys through inclusive strength, mobility, and habit-building programs for every body | Videos, E-Books |
| Zenith Pulse Wellness | `wellness-dropship.mock.shop` | Curated ergonomic tools and recovery essentials designed to help you find balance and vitality in every moment | Manual Massage Tools, Sports Water Bottles, Supports & Braces, Positional Sleep Aids, Ultrasonic Diffusers |
| Shopify Hydrogen | `shopify.dev` | React-based framework for building custom Shopify storefronts on the Storefront API |  |
| Shopify Oxygen | `shopify.dev` | Shopify's global edge hosting for deploying Hydrogen storefronts for free |  |
| Shopify Storefront API | `shopify.dev` | The GraphQL commerce API that mock.shop mirrors, with the full schema and reference |  |
| Shopify AI Toolkit | `shopify.dev` | The agent plugin for Claude Code, Codex, Cursor, VS Code, and others |  |
| Create a preview store | `shopify.dev` | With the toolkit installed, `shopify store create preview` opens a free store the merchant can build on right away and claim later, with no signup, browser flow, or credit card |  |

</details>
<!-- STORE_DIRECTORY:END -->

## What works, and what doesn't

mock.shop is for building, not for selling.

| | |
| --- | --- |
| ✅ Products, collections, search, menus, images, prices | Everything the Storefront API serves, with realistic fictional data |
| ✅ Carts | Add, update, and remove lines. Build the whole shopping flow |
| 🎭 Checkout | Mocked. The cart hands off to a demo checkout page. No payment is taken and no order is placed |
| ❌ Customer accounts | The Customer Account API isn't available, so **Sign in** and the `/account` routes error until you connect a real store |

## Connect a real store

When you're ready to sell, link the project to your Shopify store and pull its credentials. Nothing else changes.

```bash
npx shopify hydrogen link
npx shopify hydrogen env pull
```

Then deploy to [Oxygen](https://shopify.dev/docs/storefronts/headless/hydrogen/deployments), Shopify's hosting for Hydrogen storefronts:

```bash
npx shopify hydrogen deploy
```

## Built for coding agents

Point your agent at [`llms.txt`](llms.txt) or [`AGENTS.md`](AGENTS.md). Both explain the store catalog, how to switch stores, and what mock.shop can't do, so the agent queries real data instead of inventing products. If you use the [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit), its Hydrogen and Storefront GraphQL instructions already point at mock.shop.

The full guide is [About mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) on shopify.dev.

## What's inside

Shopify's Hydrogen skeleton template, unchanged, plus a few files that teach it about mock.shop.

```
├── app/                      Hydrogen skeleton: routes, components, GraphQL fragments
├── AGENTS.md                 What agents need to know about mock.shop (CLAUDE.md points here)
├── llms.txt                  The same, in the llms.txt convention
├── .cursor/rules/            Cursor rule for mock.shop
├── .env.example              SESSION_SECRET plus the PUBLIC_STORE_DOMAIN store selector
└── scripts/
    └── update-store-directory.mjs   Regenerates the store table from mock.shop/llms.txt
```

The skeleton itself: React Router 7, Hydrogen, Oxygen, Vite, Shopify CLI, TypeScript, ESLint, Prettier, and GraphQL codegen.

## Staying fresh

Two scheduled workflows keep this starter from going stale:

- **Skeleton sync** re-scaffolds from the latest Hydrogen release every week and opens a pull request when anything drifted.
- **Store directory** regenerates the table above from mock.shop's live directory.

Galleries that link here always get a current starter.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## License

[MIT](LICENSE.md) · Copyright 2026-present, Shopify Inc.
