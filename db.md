* restaurant {id, name, category, address, site, phone, image, ranking, date_created, date_updated}
* user {id, role, email, password, date_created, date_updated}
* favourit {id, user_id, restaurant_id, date_created, date_updated}
* comment {id, restaurant_id, date_created, date_updated}
* insta_profile {id, name, date_created, date_updated}
* recommendation {user_id, insta_profile_id: null, name, note, link, is_fetched: 0, date_created, date_updated}
* insta_profile_restaurant { insta_profile_id, restaurant_id }