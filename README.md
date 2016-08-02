
Synopsis

This is the final project for Girls Who Code Summer Immersion Program 2016 hosted at Pivotal | Team Members: Priya and Kaitlyn | 
Goal: create an app to teach basic health care to people in deveopling nations.

Code Example

 if (x == "Language=Hindi"){ 
    
    for(i=1;i<16;i++){
      console.log(i);
      current_aud="aud"+String(i);
      y= document.getElementById(current_aud).getAttribute("data-language");
      if (y=="Hindi") {
        document.getElementById(current_aud).style.display='block';
      };
    }
  }

Motivation

The top causes of death in the world are all mainly preventable, so we cover the basics on diseases from Malaria to HIV/AIDs, as well as general care for mothers, infants and common injuries. By relying mostly on graphics and images, we try to make the information as easy to comprehend, regardless of language or literacy. We also include a language function to read aloud the text in the user's selected language. Most importantly, we want people to understand when it is necessary to go to a hospital. Our main feature uses Google Maps API to track the location of the phone and display the nearest hospitals in a 50,000 meter radius. With necessary education and resources, we hope to improve the health of those in developing nations. 

Installation

Our code works on a mobile site, and can also be downloaded as an app on IOS, Android, and Windows. 

API Reference

Google Maps API: 
https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&sensor=true&libraries=places&callback=initMap

Tests

Test functions such as : language selection, zoom, and locate nearby doctors. 

Contributors

Thank you to Girls Who Code and Pivotal for helping us with this project! A doctor's medical reference would also we greatly appreciated. 

License

MIT LIcense 
