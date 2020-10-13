// Import stylesheets
import './mybooking.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<head>
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="myBooking.css">
</head>
<body>
    
   <h6>Bluelight Guest house</h6> 
<div id="starttt">
   
    <img src=https://cache.marriott.com/marriottassets/marriott/AUHCY/auhcy-suite-0015-hor-clsc.jpg?interpolation=progressive-bilinear&" height="120" width="120">
  </div>
  
  <div class="para">
    <p><i>Bluelight is ideally situated for business and leisure traveler,close to Pretoria CBD,Hatfield,Brooklyn and 5 minutes walk both Loftus stadium and Univercity of Pretoria the privacy you want,
        while also receiving the care you deserve from compassionate 
       and competent staff.
        
      </i></p>
</div>



<div class="box">
	<a class="button" href="#popup1">contact</a>
</div>

<div id="popup1" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
		<div class="content">
		     <div id="contact">
                <h3>Direct Contact Details</h3>
            
                  
           
                <p>Telephone: <b>+27 11 146 9885</b></p>
                <p>Cell phone: <b>+27 73 446 9885</b></p>
                <p>Email: <b>bokingroom@guesthouse.co.za</b></p>
                <p>Physical Address: <b>13165 palmrige primrose street Gauteng South Africa</b></p>
        
        
        </div>
		</div>
	</div>
</div>

        
<div class="box">
	<a class="button" href="#popup2">Quick Query</a>
</div>

<div id="popup2" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
		<div class="content">
		     <div id="contact">
        <h1>Quick Query</h1>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" >
            </div>
            
            <div>
            <label for="cell">Mobile Number</label>
            <input type="text" name="cell">
            </div>
            <div>
            <label for="Email">Email</label>
            <input type="text" name="email">
            </div>
        
            <div>
              <label>Message</label>
              <input type="text" name="Message">
            </div>
            <button type="button" onclick="alert('Successfully submited')">Submit</button> 
           
       </div>
       </div>
       </div>
       </div>

      
   
   <div class="box">
	<a class="button" href="#popup3">Bookings</a>
</div>

<div id="popup3" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
		<div class="content">           
                    <div>
                    <h3>Booking Form</h3>
                     <label>Name</label>
                     <input type="text" class="bx" name="Name" placeholder="Precious">
                </div>
            
                <div>
                    <label>ID number</label>
                    <input type="text" class="bx"name="ID" placeholder="9711221045084">
                </div>
            
                <div>
                    <label>Cell phone</label>
                    <input type="text" class="bx" name="cell" placeholder="073 2345 7895">
                </div>
            
                <div>
                    <label>Email</label>
                    <input type="text" class="bx" name="email" placeholder="Preciouse@gmail.com">
                </div>
            
                <div>
                    <label>NO. of People</label>
                    <input type="number" class="bx" name="peopleNo" placeholder="4">
               </div>
            
               <div>
                <label>Arrival</label>
                <input type="date" class="bx" name="Name" placeholder="12-sept-2020">
            </div>
            
            <div>
                <label>Departure</label>
                <input type="date" class="bx" name="Name" placeholder="13-sept-2020">
            </div>
            
            <div>
                    <label>Payment Method</label>
                    <label><b>Card</b></label>
                    <input type="radio" class="bx" name="option1" >
                    <label><b>Cash</b></label>
                    <input type="radio" class="bx" name="option1">
                </div>
            
              <div>
                <label for="roomType">Room type</label>
                <select name="Room type">
                    <option>Select Room Type</option>
                    <option>Deluxe room R900</option>>
                        <option">Standard R500</option>
                            <option>Executive R600</option>
                            <option>Family Room R1200</option>
                </select>
              </div>
            
              <div>
            <label for="I agree":>Terms and Condition</label>
            <input type="checkbox" name="agree">
              </div>
           
            
              <div>
              <button type="button" id="bbb" onclick="alert('Successfully submited We will contact you soon')">BOOK NOW</button> 
      </div>
      </div>
      </div>
      </div>
        

        
         
   


<div class="box">
	<a class="button" href="#popup6">Room Price</a>
</div>

<div id="popup6" class="overlay">
	<div class="popup">

		<a class="close" href="#">&times;</a>
		<div class="content">
          
    
            <h3>Rooms</h3>
          
        <b>#Executive R900</b>
        <br><b>Bathing Facilities</b>: En-suit and shower
        <br><b>Beds</b>:Double beds
        <br><b>Other</b>:Warm/Cool Air-Conditioner,Tea and Coffee facility and Bar Fridge
        <br>**************************************
       
        <br><b>#Deluxe R600</b>
        <br><b>Bathing Facilities  </b>: En-suit and shower
        <br><b>Beds</b>:Double beds
        <br><b>Other</b>:Warm/Cool Air-Conditioner,Tea,Coffee facility,Wi-Fiand,DSTV and Bar Fridge
       <br>**************************************
        
       
        <br><b>#Family Room R1000</b>
        <br>This unites are designed to accomodate
        <br>a family of up to 6 members,having double and twin beds that can be joined to form king size
     <br>**************************************
     
        
        <br><b>#Standard Rooms R500</b>
        <br><b>Bathing Facilities</b>: En-suit and shower
         <br><b>Beds</b>:Double beds
        <br><b>Other</b>:Warm/Cool Air-Conditioner,Tea and Coffee facility and Bar Fridge
     
          </div>
          </div
          </div>
        

        
        <div class="box">
	<a class="button" href="#popup4">View Gallery</a>
</div>

<div id="popup4" class="overlay">
	<div class="popup">
		<a class="close" href="#">&times;</a>
		<div class="content">
               
                <img src="http://alphaducap.co.za/images/Picture3.jpg" height="150" width="200">
                <img src="https://www.roomsforafrica.com/new-gallery/almarviewguesthouse_15-x_large.jpg" height="150" width="200">
                <img src="http://olgapuri.org/wp-content/uploads/2019/11/guest-house-view-small-1-e1574847707385-600x400.jpg" height="150" width="200">
               
           
            
            <h1>Confrence Hall</h1>
             
               
                <img src="https://res.cloudinary.com/simplotel/image/upload/x_0,y_84,w_1600,h_899,r_0,c_crop,q_60,fl_progressive/w_960,f_auto,c_fit/the-riverview-retreat-corbett/Conference_Hall_umytqx" height="150" width="200">
                <img src="https://www.hotelgermanpalace.com/wp-content/uploads/2018/01/hotel-german-palace-ahmedabad-gandhinagar-best-stay-banquet-13.jpg" height="150" width="200">
                <img src="http://www.internationalcentregoa.com/wp-content/uploads/2012/04/DSC_0234.jpg" height="150" width="200">
              
          
            <h1>bathrooms</h1>
               
              
                <img src="http://static.seattletimes.com/wp-content/uploads/2017/02/cc4cb082-e04f-11e6-a303-e49f56b5b765-780x1170.jpg" height="150" width="200">
                <img src="http://kingfisher.scene7.com/is/image/Kingfisher/Project_Bathroom_Dream" height="150" width="200">
                <img src="https://cdn.decoist.com/wp-content/uploads/2015/12/Dream-bathroom-with-clean-grout.jpg" height="150" width="200">
               
         
            
            <h1>Family Rooms</h1>
             
              
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/42/18/62/caption.jpg" height="150" width="200">
                <img src="https://www.salthillhotel.com/cmsGallery/imagerow/11885/resized/1600x990/family_room.jpg" height="150" width="200">
                <img src="https://www.berjayahotel.com/sites/default/files/hotel-room-type/makati/berjaya-makati-hotel-2bedroom-deluxe-twin-interior_2.jpg" height="150" width="200">
               
            
            
            <h1>Standard Rooms</h1>
              
               
                <img src="http://seftonhotel.co.im/wp-content/uploads/2016/04/Standard-Room-3.jpg" height="150" width="200">
                <img src="https://volosfiloxenia.gr/wp-content/uploads/2018/05/image10-1170x680.jpg" height="150" width="200">
                <img src="http://www.moscow-hotels.net/images/hotels/aerostar-hotel/accommodation/rooms/standard-double-room.jpg" height="150" width="200">
             
         
            
            <h1>Executive Rooms</h1>
              
            
            <img src="https://cache.marriott.com/marriottassets/marriott/AUHCY/auhcy-suite-0015-hor-clsc.jpg?interpolation=progressive-bilinear&" height="150" width="200">
                <img src="https://cdn.audleytravel.com/-/-/79/1315750-goble-palms-guest-house-standard-room.jpg" height="150" width="200">
                <img src="http://www.parkregisbirmingham.co.uk/files/2015/11/Standard-bedroom.jpg" height="150" width="200">
               
            
           </div>
           </div>
           </div>
      
        
        
        

        
        <div id="Reserved">
          <p>@Bluelight All Right Reserved</p>
          </div>
        

</body>
`;