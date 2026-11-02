# mock.shop starter

**A Shopify Hydrogen storefront that runs the moment you clone it.** No store, no token, no account. It reads [mock.shop](https://mock.shop/?utm_source=docs), a real Storefront API with more than 100 fictional catalogs to build against.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md) [![Hydrogen 2026.4](https://img.shields.io/badge/Hydrogen-2026.4-95BF47?logo=shopify&logoColor=white)](https://shopify.dev/docs/storefronts/headless/hydrogen) ![Node 22 or 24](https://img.shields.io/badge/Node-22%20%7C%2024-339933?logo=node.js&logoColor=white)

[![Run in CodeSandbox](https://img.shields.io/badge/Run%20in-CodeSandbox-151515?logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/Shopify/mock-shop-starter) [![Browse in StackBlitz](https://img.shields.io/badge/Browse%20in-StackBlitz-1269D3?logo=stackblitz&logoColor=white)](https://stackblitz.com/github/Shopify/mock-shop-starter) [![Browse in Bolt](https://img.shields.io/badge/Browse%20in-Bolt-000000?logo=bolt&logoColor=white)](https://bolt.new/github.com/Shopify/mock-shop-starter)

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
149 stores, generated from [mock.shop/llms.txt](https://mock.shop/llms.txt?utm_source=docs) on 2026-11-02. Set `PUBLIC_STORE_DOMAIN` to the host to use a store.

<details>
<summary>Show all 149 stores</summary>

| Store | Host | What it sells | Categories |
| --- | --- | --- | --- |
| Evergreen Echoes | `3dpinecones.mock.shop` | We craft exquisite, 3D-printed pinecones that capture the timeless beauty of nature for your home decor | Candle Holders, Garden Sculptures, Potpourri, Seasonal & Holiday Decorations, Window Valances & Cornices, Wreaths & Garlands, Artificial Flora, Artwork. Publishes its look |
| Tabletop Forms | `3d-tabletop-games.mock.shop` | Tabletop Forms is a premium collection of 25 complementary 3D-printed games, storage pieces and table aids for board game enthusiasts. Tactile PETG geometry,.. | Games, Board Games, Card Game Accessories, Household Storage Containers, Book Stands & Rests, Dexterity Games, Dice Sets & Games, Tile Games |
| VigorVibe Active | `activewear-dropship.mock.shop` | High-performance activewear and sleek gear designed to help you crush your workout with confidence and vibrant flair | Activewear Tops, Leggings, Sports Bras, Activewear Vests & Jackets, Belt Bags. Publishes its look |
| Elysian Thread | `apparel.mock.shop` | Curated timeless apparel featuring natural fabrics and clean tailoring for the modern woman's sophisticated wardrobe | Blouses, Loungewear Sets, Outfit Sets, Trousers, Cardigans, Blazers, Clothing Tops, Coats & Jackets. Publishes its look |
| Velvet & Vine Boutique | `apparel-accessories.mock.shop` | We offer a curated collection of premium accessories crafted from rich, tactile materials for your everyday style | Hats, Scarves & Shawls, Belts, Bracelets, Brooches & Lapel Pins, Card Cases, Gloves & Mittens, Wallets. Publishes its look |
| Zenith Motion | `apparel-athleisure.mock.shop` | Premium performance apparel designed to transition seamlessly from your toughest studio workout to your daily routine | Dynamic Motion Training Gear, Foundation Studio Essentials, Urban Commuter Layers, Versatile Performance Tops. Publishes its look |
| EchoPulse Gear | `apparel-band-merch.mock.shop` | Fuel your fandom with high-energy apparel, limited-edition tour merch, and exclusive accessories for music lovers | Clothing Patches, Autographs, Posters, Prints, & Visual Artwork, Hoodies, T-Shirts, Belts, Hats, Mugs. Publishes its look |
| Velvet Horizon Boutique | `apparel-boutique.mock.shop` | A sophisticated gallery of unique apparel and handcrafted accessories from the world's most visionary new designers | Belts, Coats & Jackets, Dresses, Handbags, Clothing Tops, Earrings, Necklaces, Rings. Publishes its look |
| Ethereal Vows Atelier | `apparel-bridal.mock.shop` | Curating exquisite bridal gowns and heirloom accessories designed to make your special day feel truly enchanting | Bridal Veils, Dresses, Hair Accessories, Wedding Dresses, Earrings, Necklaces, Bracelets, Bridesmaid Dresses. Publishes its look |
| Velvet Pulse Boutique | `apparel-dropship.mock.shop` | Curated high-energy fashion for your next big moment, featuring bold silhouettes and statement accessories | Dresses, Necklaces, Outerwear, Clothing Tops, Handbags. Publishes its look |
| BrightSight Optics | `apparel-eyewear.mock.shop` | Curated collection of stylish prescription glasses and premium sunglasses designed for your everyday adventures | Safety Glasses, Smart Glasses, Clothing Accessories, Eyeglasses, Sunglasses. Publishes its look |
| Lumina Grain | `apparel-handbags.mock.shop` | Curated leather handbags and accessories designed with minimalist sophistication and enduring quality | Bracelets, Bucket Bags, Clutch Bags, Handbags, Handbag & Wallet Accessories, Wallets, Cosmetic & Toiletry Bags, Earrings. Publishes its look |
| Velvet & Vellum | `apparel-highticket.mock.shop` | A boutique collection of timeless luxury tailoring, artisanal knitwear, and premium leather essentials | Coats & Jackets, Dresses, Sweaters, Handbags, Perfume Extracts. Publishes its look |
| RadiantCurve Collective | `apparel-inclusive.mock.shop` | A size-inclusive fashion destination offering premium apparel tailored for comfort, confidence, and effortless style | Activewear, Dresses, Leggings, Skirts, Shirts, Suits, Belts, Outerwear. Publishes its look |
| UrbanVantage Collective | `apparel-intl.mock.shop` | Curated, travel-ready fashion designed for the modern globetrotter seeking versatility and refined comfort | Pants, Coats & Jackets, Dresses, Handbags, Shirts, Shoes, Sweaters, Backpacks. Publishes its look |
| Lumina Form | `apparel-jewelry.mock.shop` | Curated minimalist jewelry and timepieces featuring architectural lines and refined metallic textures | Watches, Jewelry Boxes, Bracelets, Earrings, Necklaces, Rings. Publishes its look |
| BrightSprout Kids | `apparel-kids.mock.shop` | We offer a vibrant collection of comfortable, durable, and playful clothing designed for every stage of childhood | Dresses, Outfit Sets, Pajamas, Throw Blankets, Pants, Shirts, Coats & Jackets, Gloves & Mittens. Publishes its look |
| Everbloom Collective | `apparel-large-catalog.mock.shop` | A curated destination for modern apparel, footwear, and accessories designed for the entire family | Watches, Activewear Tops, Baby & Children's Clothing, Coats & Jackets, Cosmetics, Pants, Robes, Shoes. Publishes its look |
| Velvet Horizon | `apparel-lingerie.mock.shop` | Curating elegant, inclusive intimates crafted from cloud-soft fabrics in a timeless, sophisticated color palette | Bras, Nightgowns, Robes, Shapewear, Bodysuits, Cheeky Panties, Bath Salts & Soaks, Perfumes & Colognes. Publishes its look |
| Velvet Sunday | `apparel-loungewear.mock.shop` | Curated loungewear essentials crafted from premium, butter-soft fabrics for your most restful moments | Candles, Loungewear Sets, Pajamas, Robes, Shorts, Blankets, Socks, Sweatpants. Publishes its look |
| Noble Stitch Atelier | `apparel-made-to-order.mock.shop` | We craft exquisite, made-to-measure garments using premium fabrics and timeless techniques for a flawless fit | Dress Shirts, Pants, Suits, Belts, Coats & Jackets. Publishes its look |
| Steady Thread Co. | `apparel-menswear.mock.shop` | Curated menswear staples crafted with durable fabrics and timeless fits for your everyday rotation | Scarves & Shawls, Shirts, Belts, Cargo Pants, Hats, Jeans, Sweaters, T-Shirts. Publishes its look |
| Summit Drift Outfitters | `apparel-outdoor.mock.shop` | High-performance apparel and essential gear designed to keep you comfortable on every rugged mountain trail | Shirts, Boots, Coats & Jackets, Pants, Athletic Socks, Gloves & Mittens, Hats, Camping Lights & Lanterns. Publishes its look |
| LunaCurve Collective | `apparel-plus.mock.shop` | A curated boutique offering premium, fashion-forward apparel designed to empower and flatter every unique body | Activewear Pants, Activewear Tops, Coats & Jackets, Dresses, Jeans, Lingerie, Robes, Shirts. Publishes its look |
| VividThread Collective | `apparel-pod.mock.shop` | Curated graphic apparel featuring striking typography and artistic illustrations for everyday comfort and style | T-Shirts, Coats & Jackets, Hats, Hoodies, Loungewear, Sweatshirts, Tank Tops, Posters. Publishes its look |
| Victory Peak Gear | `apparel-retail.mock.shop` | We provide vibrant apparel and game-day essentials to celebrate every winning moment with your favorite crowd | Decorative Flags, Mugs, Posters, Coffee & Tea Cups, Gloves & Mittens, Hats, Jerseys, Scarves & Shawls. Publishes its look |
| StridePulse | `apparel-sneakers.mock.shop` | Premium lifestyle footwear blending modern street aesthetics with high-performance comfort for your daily adventures | Activewear, Athletic Shoes, Backpacks, Boots, Insoles & Inserts, Sandals, Shoe Care Kits, Sunglasses. Publishes its look |
| Summit Glider Gear | `apparel-snowwear.mock.shop` | High-performance snowboards and rugged alpine apparel engineered for bold riders conquering the winter peaks | Headwear, Pants, Ski & Snowboard Goggles, Snowboard Bindings, Snowboards, Coats & Jackets, Snowboard Bags, Sunscreen. Publishes its look |
| VibePulse Studio | `apparel-streetwear.mock.shop` | Curated streetwear essentials featuring heavy textures, sharp graphics, and limited-edition seasonal drops | Hoodies, Pants, T-Shirts, Coats & Jackets, Hats. Publishes its look |
| ThreadJoy Collective | `apparel-subscription.mock.shop` | We deliver premium cotton tees and playful socks paired with collectible stories to brighten your daily routine | Handkerchiefs, T-Shirts, Crew Socks, Sleepwear & Loungewear. Publishes its look |
| Golden Tide Collective | `apparel-swim.mock.shop` | Curated resort wear and vibrant swimwear designed to bring a splash of color to your perfect coastal getaway | Classic Bikinis, One-Piece Swimsuits, Beach Towels, Bucket Hats, Cover Ups, Shirts, Sunglasses, Sunscreen. Publishes its look |
| Golden Era Finds | `apparel-vintage.mock.shop` | We offer a handpicked collection of unique vintage apparel and accessories designed to bring history to your wardrobe | Coats & Jackets, Dresses, Jeans, Handbags, Perfume Oils, Vases, Brooches & Lapel Pins, Earrings. Publishes its look |
| TempoBloom Timepieces | `apparel-watches.mock.shop` | A curated collection of elegant, ready-to-wear wristwatches designed to perfectly complement your unique lifestyle | Watches, Medical Alarm Watches, Anklets, Bracelets, Smart Watches. Publishes its look |
| SteadyGear Collective | `apparel-workwear.mock.shop` | Premium, durable workwear designed to keep your team comfortable, safe, and looking sharp on the job | Chef Coats & Jackets, Food Service Aprons, Belts, Coats & Jackets, Compression Socks, Hats, Scrubs, Tool Bags. Publishes its look |
| LushPebble Aquatics | `aquascaping.mock.shop` | We provide premium aquatic plants, unique hardscape stones, and complete nano tank kits for your miniature ecosystem | Aquarium Lighting, Aquarium Rocks, Aquatic Plants, Desk Lamps, Gardening Trowels, Table Scatters, Aquariums, External & Canister Aquarium Filters. Publishes its look |
| The Fragrance Courtyard | `arabic-attars.mock.shop` | The Fragrance Courtyard presents 12 eau de parfum sprays and 13 oil-based dab-on attars inspired by Arabic perfumery. Explore woody, floral, resinous and.. | Attars, Eaux de Parfum, Perfumes & Colognes, Perfume Extracts |
| Shape & Sequence | `artful-jigsaw-puzzles.mock.shop` | An art-led puzzle shop for adult enthusiasts, bringing together graphic jigsaws, sculptural mechanical puzzles and paper logic challenges. A coordinated.. | Mechanical Puzzles, Jigsaw Puzzles, Puzzles, Board Games, Print Books |
| Measure & Stir | `artisan-barware.mock.shop` | Measure & Stir is a considered home-bar catalog of Silver stainless steel tools, a Bronze-colour stainless steel bar spoon, Clear glass drinkware, mixers and.. | Beverage Syrups, Cocktail Strainers, Tumblers, Bar Spoons, Beverages, Cocktail Shakers & Tools, Soda, Carbonated Water |
| Mortar & Flame | `artisan-hot-sauces.mock.shop` | Mortar & Flame is a bold, recipe-led pantry of hot sauces, table sauces and marinades, with fermented, roasted and blended preparations. Explore 25 distinct.. | Hot Sauce, Marinades & Grilling Sauces, Condiments & Sauces, Barbecue Sauces, Curry Sauce, Salsa, Sweet and Sour Sauces |
| Small Hearth Ceramics | `artisan-tableware.mock.shop` | Handmade stoneware for everyday meals, generous tables and lived-in corners. Coordinated dining, serving and decorative pieces pair tactile surfaces and.. | Plates, Bowls, Food Storage Containers, Mugs, Serving Bowls, Vases, Butter Dishes, Candle Holders |
| The Chocolate Cabinet | `artisan-truffles.mock.shop` | Handcrafted chocolates, truffles, pralines and complementary cocoa treats for personal tasting, sharing and gifting. Cocoa Brown dustings, Dark Chocolate.. | Chocolate Truffles & Bonbons, Chocolate, Chocolate Bars & Tablets, Chocolate Gift Boxes, Hot Chocolate, Caramel & Toffee, Chocolate Covered Fruit |
| The Stitch Room | `artisan-yarn.mock.shop` | A welcoming yarn and craft-supply shop for knitting, crochet and thoughtful repairs. Explore complementary yarn weights, clearly matched tools and practical.. | Yarn, Knitting Needles, Needlecraft Kits, Thread & Yarn Tools, Advent Calendars, Craft & Office Scissors, Craft Measuring & Marking Tools, Crochet Hooks |
| Sonic Haven | `audio.mock.shop` | Curated high-fidelity audio equipment and studio essentials designed for an immersive, crystal-clear listening journey | Audio & Video Cables, Audio & Video Receivers, Headphone Amplifiers, Microphone Accessories, Microphones, Over-Ear Headphones, Speakers, Turntables. Publishes its look |
| Open Road Heirloom | `autoaccessories.mock.shop` | Curated vintage-inspired accessories designed for stylish travelers and classic motoring enthusiasts | Clocks, Flasks, Gloves & Mittens, Suitcases, Sunglasses, Wallets, Cufflinks, Hats |
| SteadyGear Automotive | `auto-parts.mock.shop` | High-performance components and durable accessories engineered for peak vehicle reliability and control | Motor Vehicle Braking, Motor Vehicle Engine Parts, Motor Vehicle Interior Fittings, Motor Vehicle Lighting, Motor Vehicle Rims & Wheels, Motor Vehicle Suspension Parts, Oil Filters, Safety Gloves. Publishes its look |
| Perch & Current | `avian-and-aquatic.mock.shop` | Practical supplies for companion-bird keepers and freshwater aquarium keepers, organized into Bird Care and Aquarium Care with clear dimensions, materials.. | Fish & Aquatic Supplies, Aquarium Lighting, Aquariums, Bird Cage Accessories, Swings & Perches, Algae Scrapers, Aquarium Decors, Aquarium Gravel & Substrates |
| Glaze & Go Collective | `bags-dropship.mock.shop` | Curated modern bags and travel essentials designed to add a vibrant pop of color and style to your daily routine | Jet-Set Accessory Accents, Urban Transit Essentials. Publishes its look |
| Lumina Radiance Collective | `beauty-plus.mock.shop` | A curated collection of premium beauty essentials designed to celebrate every skin tone with elegance and ease | Face Makeup, Face Palettes, Makeup Brushes, Makeup Sponges, Body Butters, Body Jewelry, Candles, Eye Makeup. Publishes its look |
| GlowBound Discovery | `beauty-subscription.mock.shop` | A monthly curation of premium beauty essentials delivered to your door in beautifully themed, gift-ready boxes | Cosmetics, Hair Care, Skin Care Kits & Sets, Candles, Personal Care Gift Sets & Kits. Publishes its look |
| LuminaGlow Studio | `beauty-tools-dropship.mock.shop` | Elevate your daily self-care routine with our curated collection of professional-grade beauty and wellness tools | Nail Tools, Skin Care Rollers, Skin Cleansing Brushes & Systems, Face Serums, Facial Saunas. Publishes its look |
| CloudHaven Linens | `bedding.mock.shop` | Curated natural bedding and bath essentials designed to bring effortless comfort and calm to your home sanctuary | Bath Towels, Bed Sheets, Duvet Covers, Vases, Blankets, Throw Pillows, Candles, Lamps. Publishes its look |
| Golden Bloom Apiary Supply | `beekeeping-retail.mock.shop` | We provide friendly starter kits and essential hives to help hobbyist beekeepers nurture their own thriving colonies | Beekeeping Protective Gear, Bee Hives, Gardening, Gardening Tools, Honey Extraction Equipment, Decorative Jars, Food Storage Containers, Honey Jars. Publishes its look |
| ZestBloom Fizz | `beverages.mock.shop` | We craft vibrant, fruit-forward botanical sodas and premium mixers designed to brighten your favorite social moments | Carbonated Water, Cocktail Shakers, Low Alcohol & Alcohol-Free Cocktail Mixes, Powdered Beverage Mixes, Soda, Tea & Infusions, Candy, Coasters. Publishes its look |
| Golden Hour Portraits | `bookings.mock.shop` | Premium photography services for individuals, families, and professionals seeking warm, high-quality imagery | Bridal Accessories, Consulting Services, Personal Services, Business & Productivity Software, Business Services. Publishes its look |
| Paper Haven Books | `books.mock.shop` | A cozy neighborhood sanctuary offering curated reads, beautiful journals, and charming gifts for book lovers | Art Pencils, Artwork, Bookends, Drinkware, Journals, Mugs, Pens, Pocket Notebooks. Publishes its look |
| Thicket & Basin | `botanical-soaps.mock.shop` | Thicket & Basin is a fictional collection of 25 handmade botanical soaps, coordinated bath formulations and practical bathing accessories for self-care.. | Bar Soap, Bath Salts & Soaks, Bath Melts & Teas, Bath Sponges & Loofahs, Soap Dishes & Holders, Bath & Body, Bath Additives, Bath Bombs |
| Amber & Aura | `candles.mock.shop` | Handcrafted candles and artisanal home scents designed to create an inviting, soulful atmosphere in every room | Candles, Incense, Incense Holders, Lamps, Sculptures & Statues, Vases, Decorative Bowls, Decorative Trays |
| Bloom & Dew Botanicals | `clean-beauty.mock.shop` | A curated collection of plant-powered skincare and beauty essentials crafted with transparent, earth-friendly ingredients | Eye Makeup, Face Makeup, Hair Styling Products, Shampoo & Conditioner, Face Moisturizers, Facial Cleansers, Bath Salts & Soaks, Candles. Publishes its look |
| Sunbeam Brew Co. | `coffee.mock.shop` | We source and roast premium single-origin beans and craft kits to bring the ultimate café experience to your kitchen | Coffee Beans & Ground Coffee, Coffee Makers & Espresso Machines, Mugs, Coffee & Tea Sets, Food Storage Containers. Publishes its look |
| Vault & Virtue | `collectibles.mock.shop` | A premium destination for rare trading cards, limited edition figures, and high-quality display essentials | Action Figures, Artwork, Bookends, Building Toys, Card Game Accessories, Card Games, Collectibles, Craft Storage Boxes & Cases. Publishes its look |
| BrightHue Harbor | `craft-supplies.mock.shop` | A vibrant collection of premium art supplies, textile materials, and curated kits for makers of all skill levels | Artisan Surface Papers, Embellished Textile Works, Pigmented Studio Essentials, Precision Sculpting Tools, Textured Fiber Weaves. Publishes its look |
| Little Loop Hollow | `crochet-amigurumi.mock.shop` | Handmade crochet plushies and amigurumi for gentle play and character collecting. Meet huggable woodland friends, friendly fantasy creatures, food-inspired.. | Stuffed Animals, Sculptures & Statues, Seasonal & Holiday Decorations, Decor |
| Mock.shop — Default apparel sample | `demostore.mock.shop` | High quality commerce data for your storefront | Accessories, Bottoms, Featured, Men, Shoes, Tops, Unisex, Women. Publishes its look |
| Glide Path Disc Sports | `disc-golf-dropship.mock.shop` | Providing high-quality discs, durable gear, and essential course equipment to elevate every player's game | Disc Golf Bags, Disc Golf Discs, Sunscreen, Athletic Shoes, Portable Disc Golf Baskets. Publishes its look |
| BrightPath Creative | `ebooks-digital.mock.shop` | Practical guides and thoughtfully designed workbooks to help creative freelancers grow their business with confidence | Document Templates, E-Books, Planners, Videos. Publishes its look |
| Puddlepath Playroom | `fairy-garden-kits.mock.shop` | Twenty-five illustrated activity kits for curious children aged six and up, with adult supervision: observe the outdoors, record small discoveries and build.. | Craft Kits, Science & Exploration Sets, Sensory Toys, Activity Toys, Binoculars, Gardening, Journals, Mosaic Kits |
| Joyful Gatherings Studio | `family-pod.mock.shop` | We craft custom apparel and keepsakes to make your family celebrations and milestones truly unforgettable | Activewear Tops > T-Shirts, Bridal Accessories, Clothing Tops > T-Shirts, Loungewear Sets, Outfit Sets, Tank Tops, Hats, One-Pieces. Publishes its look |
| Culture Craft Kitchen | `fermentation.mock.shop` | We provide premium fermentation kits to help you craft delicious, probiotic-rich ferments in your own home | Hot Sauce Crafting Suite, Kimchi Prep Systems, Kombucha Brewing Essentials, The Sourdough Starter Kit |
| FIFI | `fifi.mock.shop` | Hand-shaped glassware, vases, and lighting in warm, earthy colours | Candle Holders, Vases, Table Lamps, Bud Vases, Candles, Decorative Bowls, Serveware, Shaker Sets |
| Zenith Motion | `fitness-dropship.mock.shop` | Premium space-saving fitness gear and recovery tools designed to help you reach your peak potential from home | Exercise Equipment Mats, Free Weight Sets, Yoga & Pilates Mats, Cardio Machine Accessories & Parts, Manual Massage Tools. Publishes its look |
| Riffle Bench | `fly-tying-supplies.mock.shop` | Riffle Bench is a compact technical catalog of fly-tying materials and finished flies, organized around bench function and pattern family. An Ivory, Tan,.. | Artificial Fishing Flies, Fly Tying Feathers, Fly Tying Materials, Fishing Hooks, Fly Tying Fur & Hair, Fly Tying Wire, Fly Tying Chenille & Braids, Fly Tying Dubbing |
| Velvet Aura | `fragrance.mock.shop` | A refined collection of artisanal perfumes, colognes, candles, and room sprays designed to elevate your living space | Fragrance Oil, Perfume Extracts, Perfume Oils, Candles, Scented Sachets. Publishes its look |
| Haven & Hearth | `furniture.mock.shop` | We offer a refined collection of handcrafted wooden furniture and textured upholstery designed for peaceful homes | Cabinets & Storage, Beds & Accessories, Desks, Dining Chairs, Dining Tables, Rugs, Sectional Sofas, Floor Lamps. Publishes its look |
| Beam & Byte | `gadgets.mock.shop` | Curated modern electronics and sleek desktop essentials designed to keep your digital life organized and powered up | Over-Ear Headphones, Extension Cables, Laptop Stands, Mobile Phone Stands, Tablet & E-Book Reader Screen Protectors, Tablet Computer Accessories, USB & FireWire Hubs, Battery Accessories. Publishes its look |
| BeamPulse Tech | `gadgets-dropship.mock.shop` | We curate sleek, portable gadgets and smart accessories designed to keep you connected and inspired on the move | Desktop Organizers, General Purpose Battery Chargers, Projector Accessories, Backpacks, Network Cards & Adapters. Publishes its look |
| PixelBloom Assets | `game-assets-digital.mock.shop` | A vibrant collection of high-quality 3D models, textures, and sprites crafted for indie game developers | 3D Modeling Software, Graphic Design & Illustration Software, Software Development Tools, Animation Editing Software, Audio Accessories. Publishes its look |
| Sunlit Sprout Collective | `garden.mock.shop` | We offer thoughtfully curated tools and natural decor to help your outdoor sanctuary flourish all season long | Gardening Trowels, Plant Stakes, Tool Sets, Watering Cans, Candles, Garden Sculptures, Pots & Planters, Seeds. Publishes its look |
| SproutJoy Gardening | `garden-dropship.mock.shop` | We provide ergonomic tools and compact systems to help your home garden flourish with ease and vibrant life | Pruning Shears, Pressure Washers, Gardening Trowels, Lawn Ornaments & Garden Sculptures, Watering Cans. Publishes its look |
| Brightly Home & Hearth | `general-store.mock.shop` | Your friendly local source for quality kitchen essentials, thoughtful gifts, and everyday home necessities | Drinkware, Food Storage Containers, Kitchen Tools & Utensils, Kitchen Towels, Business Card Cases, Stationery, Candles, Gift Wrapping. Publishes its look |
| Sunny Harvest Market | `grocery-retail.mock.shop` | Your neighborhood destination for farm-fresh produce, artisanal bakery treats, and everyday household essentials | Bakery Assortments, Canned & Jarred Vegetables, Chips, Citrus Fruits, Meat, Baking Mixes, Croissants, Fresh & Frozen Vegetables. Publishes its look |
| Steady Peak Grooming | `grooming.mock.shop` | Premium essentials for hair, skin, and beard designed to keep you looking sharp and feeling your absolute best | Refined Grooming Essentials, Sculpt and Style Collection, The Daily Ritual Shave Set, The Nomad Traveler Kit. Publishes its look |
| Lumea Strand | `haircare.mock.shop` | Premium salon-grade haircare essentials crafted to nourish, revitalize, and celebrate your unique hair journey | Bath & Body, Shampoo & Conditioner, Hair Masks, Hair Pomades & Waxes, Hair Sprays, Hair Styling Products, Hair Treatments, Hairbrushes & Combs. Publishes its look |
| LuminaStrand | `haircare-dropship.mock.shop` | Premium salon-grade styling tools and accessories designed to give you professional, glossy results at home | Hair Curlers, Hair Dryers, Hair Serums, Hair Straighteners, Hair Styling Tool Accessories. Publishes its look |
| The Folded Margin | `handcrafted-stationery.mock.shop` | The Folded Margin offers hand-bound planners and notebooks, hand-finished correspondence goods and sewn fabric accessories for everyday paper rituals. A.. | Planners, Journals, Notebooks & Notepads, Address Books, Binder Paper, Bookmarks, Decorative Stickers, Desk Calendars |
| SteadyBuild Depot | `hardware.mock.shop` | Your go-to source for professional-grade hand tools, durable hardware, and organized workshop storage solutions | Carpenter Belts, Laser Levels, Power Tool Batteries, Rolling Tool Boxes, Work Lights, Tape Measures, Brad Nails, Deck Screws. Publishes its look |
| Patchwork Pursuit | `hobby-pod.mock.shop` | Curated graphic apparel featuring witty designs for hobbyists, makers, and outdoor explorers | Activewear, Art & Craft Kits, Board Games, Lapel Pins, Shopping Totes, Sweatshirts, T-Shirts, Crew Socks. Publishes its look |
| Flour & Hearth | `home-baking-tools.mock.shop` | A warm, practical collection of 25 baking tools and decorating supplies for home bakers, coordinated around Lavender silicone, natural Taupe wood tones,.. | Cake Decorating Supplies, Cake Pans & Molds, Kitchen Tools & Utensils, Piping Tips & Nozzles, Spatulas, Baking & Cookie Sheets, Basting Brushes, Bench Scrapers |
| Havenly Nest | `home-decor.mock.shop` | We offer a handpicked collection of sculptural decor, soft textiles, and artisanal accents to elevate your living space | Throw Blankets, Throw Pillows, Artificial Flora, Artwork, Baskets, Bookends, Decorative Bowls, Mirrors. Publishes its look |
| Spruce Haven | `home-dropship.mock.shop` | We offer clever tools and smart home gadgets designed to make your daily routines effortless and joyfully organized | Household Cleaning Supplies, Kitchen Appliances, Kitchen Organizers, Air Fresheners, Household Cleaning Products. Publishes its look |
| Havenly Nest | `home-large-catalog.mock.shop` | Discover thoughtfully designed furniture and decor essentials to create your perfectly balanced sanctuary | Household Storage Baskets, Vases, Bath Towels & Washcloths, Desks, Artificial Flora, Bath Mats & Rugs, Office Chairs, Shelving. Publishes its look |
| Lumina Form Collective | `home-lighting.mock.shop` | Curated architectural furnishings and elegant lighting solutions designed to bring warmth and harmony to every room | Mirrors, Candle Holders, Clocks, Floor Lamps, Sculptures & Statues, Table Lamps, Vases, Decorative Bowls. Publishes its look |
| Havenly Hearth Goods | `home-retail.mock.shop` | A charming neighborhood shop offering essential kitchenware, cozy linens, and thoughtful decor for daily living | Dinnerware, Drinkware, Backrest Pillows, Candle Holders, Candles, Decorative Bowls, Decorative Trays, Picture Frames. Publishes its look |
| Comb & Cupboard | `honey-and-hive.mock.shop` | Comb & Cupboard is a fictional small catalog of honey, bee ingredients, personal-care goods and practical beeswax household essentials for gourmet and.. | Honey, Vitamins & Supplements, Candles, Candy, Lip Balms, Art & Crafting Materials, Bar Soap, Bath Salts & Soaks |
| Bridal Adornment Cabinet | `indian-bridal-jewelry.mock.shop` | Bridal Adornment Cabinet is a fictional catalog of 25 complementary Indian bridal costume-jewelry products, sold individually as the stated single item, pair.. | Necklaces, Body Jewelry, Bracelets, Earrings, Hair Accessories, Rings, Anklets, Brooches |
| Everyday Indian Pantry | `indian-spice-pantry.mock.shop` | A warm, traditional pantry for home cooks: 15 spices, six pickles and four cooking oils, with straightforward notes for tempering, curries and meal.. | Herbs & Spices, Pickled Fruits & Vegetables, Coconut Oil, Cooking Oils, Peanut Oil, Pepper, Sesame Oil |
| SteadyWorks Supply Co. | `industrial.mock.shop` | Providing high-performance industrial equipment and essential operational supplies for your professional workspace | Dollies & Hand Trucks, Industrial Shelving, Industrial Storage Accessories, Moving & Shipping Boxes, Packing Materials, Pallet Jacks, Construction, Safety Glasses. Publishes its look |
| Glimmerly | `jewelry-dropship.mock.shop` | Curated gold-tone jewelry and sparkling accessories designed to make every day feel like a special occasion | Earrings, Necklaces, Rings, Bracelets, Watches. Publishes its look |
| SunnySprout Kids | `kids-dropship.mock.shop` | We offer cheerful, soft-fabric clothing and playful accessories designed to make every childhood moment pop | Dresses, Outerwear, Pajamas, Hair Accessories, Shirts. Publishes its look |
| Copper & Clover Kitchen | `kitchen.mock.shop` | A curated collection of elegant, high-performance kitchen essentials designed to inspire your daily cooking journey | Bowls, Measuring Cups, Serveware, Stock Pots, Kitchen Knives, Mandoline Slicers, Aprons, Candles. Publishes its look |
| Zestful Kitchen Joy | `kitchen-dropship.mock.shop` | Discover vibrant tools and clever gadgets designed to simplify cooking and bring excitement to your kitchen routine | Kitchen Knives, Kitchen Slicers, Serveware, Food Storage Containers, Juicers. Publishes its look |
| LuminaFlow | `lighting-dropship.mock.shop` | Transform your home with smart, app-controlled lighting solutions designed to set the mood for every moment | Desk Lamps, Light Ropes & Strings, Wall Light Fixtures, Night Lights & Ambient Lighting, Smart Speakers. Publishes its look |
| The Riding Atelier | `luxury-equestrian.mock.shop` | A considered equestrian wardrobe and tack room edit in coordinated Walnut, Chestnut and Tan, with restrained Silver metal details. The Riding Atelier brings.. | Boots, Breeches, Bridles, Horse Tack Accessories, Jackets, Shirts, Belts, Chaps |
| Lumina Silk | `makeup.mock.shop` | Curated essentials for a luminous, sculptural look with a focus on neutral tones and sophisticated skin textures | Eye Shadows, Face Moisturizers, Face Primers, Mascaras, Blushes, Lip & Cheek Stains, Lip Balms, Lip Gloss. Publishes its look |
| Summit Trace Prints | `map-posters-pod.mock.shop` | Custom topographic art featuring your favorite national parks and hiking trails printed on premium archival paper | Greeting Cards, Posters, Prints, Decorative Tapestries, Mugs, Outdoor Blankets, Paintings, Photographs. Publishes its look |
| Quiet Steep | `matcha-and-teaware.mock.shop` | Quiet Steep is a small fictional collection of teas and considered tools for matcha preparation, loose-leaf discovery, and everyday brewing. Ivory refill.. | Green Tea, Black Tea, Bowls, Food Storage Containers, Matcha, Oolong Tea, Whisks, Coffee & Tea Cups |
| ClickyCanvas | `mechanical-keyboards.mock.shop` | Curated components and DIY kits to build your perfect custom mechanical keyboard one click at a time | Barebones Keyboards, Desk Organizers, Keyboard & Mouse Wrist Rests, Keyboard PCBs, Keyboard Switches, Keyboard Stabilizers, Keyboard Stickers & Decals, Mice & Trackballs. Publishes its look |
| Quiet Practice | `mindful-yoga.mock.shop` | Simple essentials for yoga practice, seated meditation and everyday reflection. Quiet Practice brings together 25 distinct tools with tactile materials,.. | Yoga & Pilates Bolsters & Cushions, Yoga & Pilates Stretch Straps & Bands, Yoga & Pilates, Yoga & Pilates Blocks, Yoga & Pilates Mats, Benches, Chimes, Eye Pillows |
| VelvetAntler Comfort | `moose-antler-covers.mock.shop` | We provide premium, gentle covers designed to keep your favorite antlers cozy and scratch-free all season long | Artwork, Candles, Figurines, Mirrors, Table Lamps, Table Runners, Lawn Ornaments & Garden Sculptures, Seasonal & Holiday Decorations |
| Sunny Nest Goods | `mugs-pod.mock.shop` | Curated home essentials and charming gifts featuring vibrant, playful illustrations to celebrate every season | Coasters, Mugs, Chair & Sofa Cushions, Greeting Cards, Holiday Ornaments, Kitchen Towels, Prints, Shopping Totes. Publishes its look |
| SporeJoy Gardens | `mushroom-kits.mock.shop` | We provide premium cultivation kits and organic supplies to help you harvest fresh mushrooms right from your kitchen | Seeds, Cultivating Tools, Fertilizers, Plant Stakes, Sands & Soils, Food Dehydrators, Food Graters, Food Peelers. Publishes its look |
| Sonorous Pulse | `music-digital.mock.shop` | A curated collection of premium royalty-free audio, soundscapes, and cinematic effects for creators and storytellers | Digital Music Downloads, Sound Editing Software, Video Editing Software. Publishes its look |
| MVSE | `mvse.mock.shop` | Art-history skate decks, wheels and apparel | Skateboard Decks, Skateboard Wheels, Baseball Caps, Hoodies, Beanies, Sneakers, T-Shirts, Overshirts |
| The Clothwork Cupboard | `needlework-and-fabric.mock.shop` | A small catalog of sewing fabrics and thoughtfully specified needlework kits, from everyday cottons to dimensional embroidery, coordinated in Ivory, Sand,.. | Needlecraft Kits, Cotton, Fabric, Fabric Repair Kits, Flannel, Linen, Organza, Quilting Rulers |
| Golden Hearth Provisions | `pantry.mock.shop` | We offer a vibrant selection of artisanal pantry staples, handcrafted snacks, and curated gift boxes for food lovers | Herbs & Spices, Condiments & Sauces, Cooking Oils, Jams & Jellies, Serving Platters, Crackers, Trail & Snack Mixes, Chocolate. Publishes its look |
| StitchBloom Studio | `patterns-digital.mock.shop` | Modern, downloadable sewing patterns and creative inspiration for makers to design their own unique capsule wardrobe | Digital Sewing Patterns, E-Books, Videos. Publishes its look |
| Everlasting Pawtraits | `pet-portraits.mock.shop` | We hand-paint beautiful, custom portraits of your cherished pets to celebrate the bond you share | Paintings, Personalized ID Collars, Picture Frames, Candles, Prints. Publishes its look |
| Paws and Whimsy | `pets.mock.shop` | A vibrant boutique offering durable, stylish gear and delightful accessories for your beloved furry companions | Bowls, Catnip Toys, Dog Toys, Food Storage Containers, Pet Beds, Pet Carriers & Crates, Pet Apparel, Pet Collars & Harnesses. Publishes its look |
| JoyfulPaws Tech | `pets-dropship.mock.shop` | We offer innovative, easy-to-clean smart tools and interactive toys designed to make pet care simple and fun | Dog Toys, Pet Carrier & Crate Accessories, Pet Grooming Supplies, Pet Training Aids, Travel Bowls. Publishes its look |
| GlideGear Essentials | `phone-accessories-dropship.mock.shop` | Premium accessories and protective gear designed to keep your favorite devices stylishly secure and fully powered | Mobile Phone Cases, Mobile Phone Stands, Laptop Sleeves, Mobile Phone Car Mounts, Mobile Phone Screen Protectors. Publishes its look |
| Bloom & Bold Studio | `phone-cases-pod.mock.shop` | Elevate your tech with vibrant botanical, abstract, and typographic designs crafted for everyday inspiration | Artwork, Journals, Mobile Phone Cases, Mobile Phone Charms, Mobile Phone Skins & Wraps, Mobile Phone Stands, Wallets, Keychains. Publishes its look |
| Next Point Court Shop | `pickleball-gear.mock.shop` | A coordinated 25-product pickleball catalog for match play, focused practice, and warm-ups. Light Grey and Charcoal foundations connect equipment and.. | Pickleball, T-Shirts, Pickleball Paddles, Pickleballs, Shorts, Athletic Shoes, Backpacks, Baseball Caps |
| Larder & Brine | `pickles-and-preserves.mock.shop` | Larder & Brine is a small-batch pantry collection of vegetable pickles, jams, fruit preserves, citrus marmalades, jelly and chutneys for cheese boards,.. | Pickled Fruits & Vegetables, Jams & Jellies, Chutney, Mustard |
| Petal & Frond | `pressed-flower-jewelry.mock.shop` | Handcrafted botanical jewelry for women, featuring dried daisies and fern fragments encapsulated in transparent resin. Daisy Meadow pairs Ivory botanical.. | Bracelets, Earrings, Necklaces, Rings, Anklets, Body Jewelry, Brooches, Lapel Pins |
| CanvasBloom Studio | `printables-digital.mock.shop` | Instant digital downloads featuring elegant botanical prints, modern typography, and whimsical art for all ages | Digital Goods & Currency. Publishes its look |
| VelocityVibe Racers | `printed-racecars.mock.shop` | We craft high-performance 3D printed race cars and modular track components designed for enthusiasts of all ages | Toy Race Car & Track Sets, Clothing Patches, Lawn Ornaments & Garden Sculptures, Remote Control Toys, 3D Printer Accessories, Building Toys, Craft Kits, Play Vehicle Accessories. Publishes its look |
| Lumina Haven Studio | `salon.mock.shop` | A tranquil sanctuary for premium hair styling, rejuvenating facials, and holistic spa wellness treatments | Facial Cleansers, Hair Styling Products, Nail Polishes, Shampoo & Conditioner. Publishes its look |
| Lumina Botanica | `skincare.mock.shop` | We blend potent clinical actives with soothing plant extracts to create simple, effective daily skincare rituals | Toners, Eye Creams, Face Moisturizers, Face Serums, Facial Cleansers, Skin Care Masks & Peels, Skin Care Rollers, Sunscreen. Publishes its look |
| DewyGlow Collective | `skincare-dropship.mock.shop` | A curated collection of trending serums, masks, and tools designed to give you that perfect, healthy-looking glow | Face Moisturizers, Face Serums, Facial Cleansers, Skin Care Masks & Peels, Skin Care Rollers. Publishes its look |
| PixelPulse Hub | `software-digital.mock.shop` | A curated marketplace offering premium creative software, essential productivity tools, and unique indie gaming finds | Multimedia & Design Software, Business & Productivity Software, Digital Goods & Currency, Video Game Software. Publishes its look |
| StridePulse Active | `sporting-goods.mock.shop` | Premium athletic gear and durable equipment designed to keep every member of your family moving with confidence | Activewear, Sports & Agility Cones, Athletic Shoes, Basketball, Boating & Water Sports, Camping & Hiking, Soccer Bags & Carriers, Soccer Protective Gear. Publishes its look |
| Urban Pulse Collective | `streetwear-dropship.mock.shop` | Curated streetwear essentials featuring oversized fits, gritty graphics, and high-energy urban style | Concrete Jungle Essentials, Industrial Motion Gear. Publishes its look |
| VividThread Collective | `streetwear-pod.mock.shop` | Curated streetwear featuring bold original graphics and modern oversized fits for your everyday urban rhythm | Pants, Belts, Bomber Jackets, Hats, Hoodies, Shorts, T-Shirts, Tank Tops. Publishes its look |
| Bloom Motion Studio | `studio.mock.shop` | A vibrant neighborhood hub for creative movement, inspiring workshops, and high-quality gear for your active lifestyle | Activewear, Belt Bags, Yoga & Pilates Blocks, Yoga & Pilates Mats. Publishes its look |
| VitalityCore Labs | `supplements.mock.shop` | We provide premium, science-backed nutritional powders and supplements designed to support your daily wellness goals | Collagen, Herbal Supplements, Multimineral Supplements, Multivitamin Supplements, Creatine, Protein Supplements, Branched-Chain Amino Acid (BCAA), CBD Supplements. Publishes its look |
| Route & Boulder | `technical-climbing.mock.shop` | Route & Boulder is a focused fictional catalogue of premium technical equipment and apparel for indoor climbing, bouldering and outdoor routes. Practical.. | Athletic Shoes, Climbing Packs & Backpacks, Jackets, Seat Climbing Harnesses, Base Layer Tops, Belay Devices, Carabiners, Climbing Brushes |
| StellarVista Optics | `telescopes-retail.mock.shop` | We provide premium telescopes and precision accessories to help stargazers explore the beauty of the night sky | Camera Lenses, Lens Filters, Reflector Telescopes, Telescope Accessories, Telescope Bags, Travel Tripods, Binoculars, Flashlights. Publishes its look |
| HappyTail Grooming Co. | `thingamabobs.mock.shop` | We provide premium, soft-touch grooming brushes designed to keep your dog's fur healthy and tangle-free | Brushes, Combs, Conditioners, Deodorizer Sprays, Grooming Wipes, Pet Hair Clippers & Trimmers, Pet Nail Tools, Dog Toys |
| BrightSpark Play | `toys.mock.shop` | A curated collection of colorful, creative toys designed to spark joy and discovery for children of all ages | Building Toys, Artwork, Blankets, Craft Kits, Outdoor Games, Plush Toys, Musical Toys. Publishes its look |
| JoyJolt Collective | `toys-dropship.mock.shop` | A vibrant hub for sensory toys, interactive companions, and creative kits designed to bring pure delight to your desk | Action & Toy Figures, Executive Toys, Sensory Toys, Activity Toys, Board Games. Publishes its look |
| Inkwell Echoes | `typewriters.mock.shop` | We specialize in fully restored vintage typewriters, premium ribbons, and essential parts for dedicated writers | Art & Craft Paper, Typewriters, Hand Tool Sets, Pliers, Clocks, Compression Springs, Bookends, Pens. Publishes its look |
| VESNA | `vesna.mock.shop` | Loud, technical utility wear for people who go outside | Outerwear, Pants, Handbags, Shirts, Hats, Sneakers, Dresses, Sweatshirts |
| The Fret Cabinet | `vintage-electric-guitars.mock.shop` | The Fret Cabinet is a fictional catalog of 25 vintage-inspired electric guitars for musicians and collectors, organized by body construction with specialist.. | Electric Guitars, Guitars |
| Needle & Dial | `vinyl-and-analog.mock.shop` | Needle & Dial is a fictional catalog of vinyl records, analog audio equipment and collector essentials, visually coordinated in Mahogany, Silver, Charcoal.. | Records & LPs, Record Cleaning Brushes, Turntables, Audio & Video Receivers, Bookshelf Speakers, Cartridges, Cassette Players & Recorders, Headphone Amplifiers |
| Canvas Bloom Studio | `wall-art.mock.shop` | Custom wall art collections featuring fine photography and abstract prints tailored to fit your unique living space | Hanging & Wall Vases, Home Decor Decals, Paintings, Photographs, Picture Frames, Prints, Sculptures & Statues, Posters. Publishes its look |
| Canvas & Clover | `wall-art-pod.mock.shop` | Elevate your walls with our premium collection of gallery-grade abstract prints, botanical art, and custom sets | Posters, Prints, & Visual Artwork, Prints, Photographs, Picture Frames, Portfolios, Wall Murals. Publishes its look |
| Velocis Wristwear | `watches-dropship.mock.shop` | Curated collection of versatile timepieces and custom straps designed to elevate your daily style with modern flair | Bracelets, Watch Bands, Watches, Jewelry Sets, Watch Storage Boxes & Rolls. Publishes its look |
| Vibrant Pulse Wellness | `wellness-digital.mock.shop` | Empowering fitness journeys through inclusive strength, mobility, and habit-building programs for every body | Videos, E-Books. Publishes its look |
| Zenith Pulse Wellness | `wellness-dropship.mock.shop` | Curated ergonomic tools and recovery essentials designed to help you find balance and vitality in every moment | Manual Massage Tools, Sports Water Bottles, Supports & Braces, Positional Sleep Aids, Ultrasonic Diffusers. Publishes its look |
| Fieldside Habitat Shop | `wildlife-garden.mock.shop` | Fieldside Habitat Shop pairs ten practical timber, clay and stone garden habitats or kits with fifteen region-reviewed plant categories. The visual palette.. | Landscaping & Garden Plants, Bird & Wildlife Houses, Garden Plants, Bat Houses, Bee Houses, Bird Baths, Birdhouses, Garden Stones |

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
