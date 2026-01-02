// dumy data 

// resturant_information
// Name
// Rating
// food_type
// price_for_two
// location
// distance
// offers
// alchol
// restaurant_opening_time
// restaurant_close_time
const names = [
  "Spice Garden", "Ocean Delight", "Urban Tadka", "Green Bowl",
  "Night Owl Cafe", "Royal Feast", "Food Hub", "Taste of India",
  "Flavour Town", "Cafe Bliss"
];
const foodTypes = [
  "North Indian", "South Indian", "Chinese", "Italian",
  "Continental", "Punjabi", "Mughlai", "Fast Food", "Cafe", "Seafood"
];

const locations = [
  "Andheri", "Bandra", "Powai", "Lower Parel",
  "Borivali", "Malad", "Goregaon", "Kurla", "Thane", "Vashi"
];

const offersList = [
  "20% OFF",
  "Flat ₹200 OFF",
  "Buy 1 Get 1 Free",
  "Free Dessert",
  "No Offer"
];
const restaurantImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
  "  https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
];
alchol_serves = ['Yes', 'NO']
function get_random(start_time, end_time) {
  // generate random hour between start_time and end_time
  let hour = Math.floor(Math.random() * (end_time - start_time + 1)) + start_time;

  let hour_type;
  let period_name;

  // AM / PM
  if (hour >= 12) {
    hour_type = "PM";
  } else {
    hour_type = "AM";
  }

  // convert 24-hour to 12-hour
  if (hour === 0 || hour === 12) {
    period_name = 12;
  } else {
    period_name = hour % 12;
  }

  return `${period_name}:00 ${hour_type}`;
}


// Random price = Math.random() × range + minimum
// Math.floor(Math.random() * (max - min + 1)) + min
for (let i = 0; i < 100; i++) {
  let array_sample = {}
  array_sample['Resturant_images'] = restaurantImages[Math.floor(Math.random() * restaurantImages.length)]
  array_sample['resturant_Name'] = names[Math.floor(Math.random() * names.length)]
  array_sample['Rating'] = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  array_sample['food_type'] = foodTypes[Math.floor(Math.random() * foodTypes.length)]
  array_sample['price_for_two'] = `${Math.floor(Math.random() * 2400 - 100 + 1) + 100}rs`
  array_sample['location'] = locations[Math.floor(Math.random() * locations.length)]
  array_sample['distance_from_customer_house'] = Math.floor(Math.random() * 10 + 1).toFixed(1)
  array_sample['offers'] = offersList[Math.floor(Math.random() * offersList.length)]
  array_sample['alchol_serves'] = alchol_serves[Math.floor(Math.random() * alchol_serves.length)]
  array_sample['resturant_open_time'] = get_random(12, 8)
  array_sample['resturant_close_time'] = get_random(8, 12)

  function sample_data_function(data) {
  const sample_data = [...data]; // clone array
  console.log(sample_data, 'c');
}

sample_data_function(array_sample);


}