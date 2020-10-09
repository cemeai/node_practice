let body = "New booking confirmed! Zas arrives Aug 24.\n"+
"Send a message to confirm check-in details or welcome Zas.\n"+
"Zas\n"+
"Temecula, California, United States\n"+
"On Airbnb since 2019\n"+
"Hi will be out in Union city for work. Will be arriving around 5 or 6 pm\n"+
"Send Zas a message\n"+
"https://www.airbnb.com/z/q/926160607?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Business-friendly room w/Fast Wifi, near Shops (F)\n"+
"Private room\n"+
"https://www.airbnb.com/rooms/41440746?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Monday Aug 24, 2020 - Saturday Aug 29, 2020\n"+
"Guests\n"+
"1\n"+
"Guests will now let you know if they're bringing children and infants. Learn more\n"+
"http://blog.airbnb.com/more-host-controls\n"+
"Confirmation code\n"+
"HMMRXRMRK2\n"+
"View itinerary\n"+
"https://www.airbnb.com/reservation/itinerary?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&code=HMMRXRMRK2&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Payout\n"+
"$32.40 x 5 Nights $162.00\n"+
"Cleaning fee $22.00\n"+
"Service fee −$5.52\n"+
"Total $178.48\n"+
"On the day after your guest checks in, the payment method you supplied will be credited. For details, see your transaction history.\n"+
"Your guest paid $23.68 in Occupancy Taxes. Airbnb remits these taxes on your behalf.\n"+
"Cancellations\n"+
"Your cancellation policy for guests is Non-refundable.\n"+
"https://www.airbnb.com/home/non_refundable_reservations?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"The penalties for canceling this reservation include getting a public review that shows you canceled, paying a cancellation fee, and having the canceled nights blocked on your calendar.\n"+
"https://www.airbnb.com/help/article/990?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Get ready for Zas's arrivalProvide directions\n"+
"Check that your guest knows how to get to your place.\n"+
"https://www.airbnb.com/hospitality?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Tidy up\n"+
"Clean up all bedrooms and shared spaces. Wash linens and towels if you provide them.\n"+
"https://www.airbnb.com/hospitality?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Visit Help Center\n"+
"https://www.airbnb.com/help?eal_exp=1600822156&eal_sig=a91b3f26b6a423f7ae1e482f0babadbbd59376c821ab53c60fecc6d67bc695bd&eal_uid=256661555&eluid=3&euid=272cccfa-6307-3959-a967-60931bf4c178\n"+
"Contact Airbnb\n"+
"https://www.airbnb.com/help/contact_us?eal_exp=1600822156&eal_sig=a91b3f26b6a423f7ae1e482f0babadbbd59376c821ab53c60fecc6d67bc695bd&eal_uid=256661555&eluid=2&euid=272cccfa-6307-3959-a967-60931bf4c178"

let inputData = {body}

let name = inputData.body.split("booking confirmed! ")[1].split(' arrives')[0]
let room = inputData.body.split(/https:\/\/www\.airbnb\.com\/.*?/)[1].split(/\n/)[2]
let code = inputData.body.split('Confirmation code')[1].split('View itinerary')[0].replace(/(\r\n|\n|\r)/gm,"");
let dates = inputData.body.split(/https:\/\/www\.airbnb\.com\/.*?/)[2].split(/\n/)[2].split(' - ')
let date_in = dates[0].split(' ').slice(1).join(' ')
let day_in = dates[0].split(' ')[0]
let date_out = dates[1].split(' ').slice(1).join(' ')
let day_out = dates[1].split(' ')[0]
let guests = inputData.body.split("Guests")[1].replace(/(\r\n|\n|\r)/gm,"")

booking = [{name, code, room, day_in, date_in, day_out, date_out, guests}];

body = "Dylan arrives Monday, August 24.\n"+
"If you haven't already, reach out to Dylan to send directions and coordinate check-in time.\n"+
"Dylan\n"+
"Newport Beach, California, United States\n"+
"On Airbnb since 2014\n"+
"Hey Alicia!\n"+
"We are coming into town for work at Gillette Field for a BMW Ride & Drive and would love to stay at your humble abode\n"+
"Send Dylan a message\n"+
"https://www.airbnb.com/z/q/919544271?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Lovely Expansive Home, Off Street Parking 1EC\n"+
"Entire home/apt\n"+
"https://www.airbnb.com/rooms/35971645?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Monday Aug 24, 2020 - Monday Aug 31, 2020\n"+
"Guests\n"+
"5\n"+
"Guests will now let you know if they're bringing children and infants. If you turn on Instant Book, guests with children will still need your approval to book. Set up Instant Book\n"+
"https://www.airbnb.com/manage-your-space/35971645/booking/house-rules?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&amp;euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Confirmation code\n"+
"HMZ5W9N3EQ\n"+
"View itinerary\n"+
"https://www.airbnb.com/reservation/itinerary?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&code=HMZ5W9N3EQ&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Payout\n"+
"$152.51 x 7 Nights $1067.60\n"+
"Cleaning fee $180.00\n"+
"Service fee −$37.43\n"+
"Total $1210.17\n"+
"On the day after your guest checks in, the payment method you supplied will be credited. For details, see your transaction history.\n"+
"Your guest paid $81.15 in Occupancy Taxes. Airbnb remits these taxes on your behalf.\n"+
"Get ready for Dylan's arrivalProvide directions\n"+
"Check that your guest knows how to get to your place.\n"+
"https://www.airbnb.com/hospitality?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Tidy up\n"+
"Clean up all bedrooms and shared spaces. Wash linens and towels if you provide them.\n"+
"https://www.airbnb.com/hospitality?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Cancellations\n"+
"Your cancellation policy for guests is Strict (grace period).\n"+
"https://www.airbnb.com/home/cancellation_policies?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013&guest_fee_policy=at_most_48_hours#strict-with-grace-period\n"+
"The penalties for canceling this reservation include getting a public review that shows you canceled, paying a cancellation fee, and having the canceled nights blocked on your calendar.\n"+
"https://www.airbnb.com/help/article/990?c=.pi80.pkcmVzZXJ2YXRpb24vaG9zdF9jb25maXJtYXRpb24%3D&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Visit Help Center\n"+
"https://www.airbnb.com/help?eal_exp=1600652228&eal_sig=43131e86461083fe55b68e3e62d6ecb8b73941d71ed723fc6e919af70c382d8f&eal_uid=258122601&eluid=3&euid=19cea081-7bab-63b9-652e-c8fd492b7013\n"+
"Contact Airbnb\n"+
"https://www.airbnb.com/help/contact_us?eal_exp=1600652228&eal_sig=43131e86461083fe55b68e3e62d6ecb8b73941d71ed723fc6e919af70c382d8f&eal_uid=258122601&eluid=2&euid=19cea081-7bab-63b9-652e-c8fd492b7013"

inputData = {body}

name = body.split(" arrives ")[0]
room = inputData.body.split(/https:\/\/www\.airbnb\.com\/.*?/)[1].split(/\n/)[2]
code = inputData.body.split('Confirmation code')[1].split('View itinerary')[0].replace(/(\r\n|\n|\r)/gm,"");
dates = inputData.body.split(/https:\/\/www\.airbnb\.com\/.*?/)[2].split(/\n/)[2].split(' - ')
date_in = dates[0].split(' ').slice(1).join(' ')
day_in = dates[0].split(' ')[0]
date_out = dates[1].split(' ').slice(1).join(' ')
day_out = dates[1].split(' ')[0]
guests = inputData.body.split("Guests")[1].replace(/(\r\n|\n|\r)/gm,"")

reminder = [{name, code, room, day_in, date_in, day_out, date_out, guests}];

console.log(booking, reminder)