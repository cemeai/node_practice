body = 'From: Airbnb <automated@airbnb.com>'+
'Date: Sat, Jun 27, 2020 at 1:26 PM'+
'Subject: Reservation canceled - Jul 1-11, Business-friendly Room w/Fast'+
'Wifi & shopping (E)'+
'To: <kristian.widjaja@gmail.com>'+
'[image: Airbnb]'+
'<https://www.airbnb.com?eal_exp=1595881604&eal_sig=ef20deda1215f4569467e4a5238aec2022673666bc7c56a7c084bb841e481098&eal_uid=16156700&eluid=0&euid=a06b1793-21c8-8fc9-015f-0f143af6eaf7>'+
'Hi Kristian,'+
'Unfortunately, your guest Rikhil had to cancel reservation HMF4ZRAZ4P.'+
'Business-friendly Room w/Fast Wifi & shopping (E)'+
'Listing #28057216'+
'Jul 1-11, 1 guest'+
'According to your cancellation policy, a complete refund was given to the'+
'guest.'+
'For more information on cancellation payouts, please read our FAQ'+
'<https://www.airbnb.com/help/question/43?c=.pi80.pkbWR4X2NhbmNlbGxhdGlvbi9yZXNlcnZhdGlvbl9jYW5jZWxlZF9ieV9ndWVzdF90b19ob3N0&euid=a06b1793-21c8-8fc9-015f-0f143af6eaf7>.'+
'Your calendar has also been updated to show that the previously booked'+
'dates are now available.'+
'Regards,'+
'The Airbnb team'+
'------------------------------'+
'Sent with ♥ from Airbnb'+
'‌A‌i‌r‌b‌n‌b‌,‌ ‌I‌n‌c‌.‌,‌ ‌8‌8‌8‌ ‌B‌r‌a‌n‌n‌a‌n‌ ‌S‌t‌,‌ ‌S‌a‌n‌'+
'‌F‌r‌a‌n‌c‌i‌s‌c‌o‌,‌ ‌C‌A‌ ‌9‌4‌1‌0‌3‌'

name = body.split("your guest ")[1].split(' had to cancel')[0]
room = body.split('Subject')[1].split('To')[0].split(', ')[1]
code = body.split('cancel reservation ')[1].split('.')[0]
guests = body.split('Listing')[1].split('According to')[0].split(', ')[1].split('guest')[0]

console.log(name, room, code)