var temperature = prompt()

if(temperature <39 && temperature >= 33){
document.write(
    "<div class='c card mx-auto' style='width: 18rem;'>"+
  "<img src='./Images/heatwave.jpg' class=' a card-img-top' alt='...'>"+
 " <div class='card-body'>"+
    "<h5 class='card-title'>"+"Heat Wave"+"</h5>"+
    "<p class='card-text'>"+"Unusually hot days and multi-day heat waves are a natural part of day-to-day variation in weather."+"</p>"+
 " </div>"+
"</div>"
);
}
else if(temperature <32 && temperature >= 27){
    document.write(
        "<div class='c card mx-auto' style='width: 18rem;'>"+
      "<img src='./Images/veryhot.png' class=' a card-img-top' alt='...'>"+
     " <div class='card-body'>"+
        "<h5 class='card-title'>"+"Very Hot"+"</h5>"+
        "<p class='card-text'>"+"Avoid high-energy activities or work outdoors, during midday heat, if possible."+"</p>"+
     " </div>"+
    "</div>"
    );
    }
    else if(temperature <26 && temperature >= 23){
    document.write(
        "<div class='c card mx-auto' style='width: 18rem;'>"+
      "<img src='./Images/hot.webp' class=' a card-img-top' alt='...'>"+
     " <div class='card-body'>"+
        "<h5 class='card-title'>"+"Hot"+"</h5>"+
        "<p class='card-text'>"+"Heat boosts the flow of blood and nutrients to an area of the body."+"</p>"+
     " </div>"+
    "</div>"
    );
    }
        else if(temperature <22 && temperature >= 16){
            document.write(
                "<div class='c card mx-auto' style='width: 18rem;'>"+
              "<img src='./Images/roomtemp.png' class=' a card-img-top' alt='...'>"+
             " <div class='card-body'>"+
                "<h5 class='card-title'>"+"Room Temperature"+"</h5>"+
                "<p class='card-text'>"+" It may be unsafe for those with respiratory issues—it increases the risk of infection."+"</p>"+
             " </div>"+
            "</div>"
            );
            }
        else if(temperature <15 && temperature >= 11){
            document.write(
                "<div class='c card mx-auto' style='width: 18rem;'>"+
              "<img src='./Images/warm.png' class=' a card-img-top' alt='...'>"+
             " <div class='card-body'>"+
                "<h5 class='card-title'>"+"Warm"+"</h5>"+
                "<p class='card-text'>"+"Having a cool shower - not freezing as you should cool down slowly."+"</p>"+
             " </div>"+
            "</div>"
            );
            }
            else if(temperature <10 && temperature >= 5){
                document.write(
                    "<div class='c card mx-auto' style='width: 18rem;'>"+
                  "<img src='./Images/mild.webp' class=' a card-img-top' alt='...'>"+
                 " <div class='card-body'>"+
                    "<h5 class='card-title'>"+"Mild"+"</h5>"+
                    "<p class='card-text'>"+" weather that is neither too hot, too cold, too humid nor rainy."+"</p>"+
                 " </div>"+
                "</div>"
                );
                }
                else if(temperature <4 && temperature >= 0){
                    document.write(
                        "<div class='c card mx-auto' style='width: 18rem;'>"+
                      "<img src='./Images/cool.jpg' class=' a card-img-top' alt='...'>"+
                     " <div class='card-body'>"+
                        "<h5 class='card-title'>"+"Cool"+"</h5>"+
                        "<p class='card-text'>"+"Stay indoors during the worst part of the extreme cold."+"</p>"+
                     " </div>"+
                    "</div>"
                    );
                    }
                    
                        else {
                            document.write(
                                "<div class='c card mx-auto' style='width: 18rem;'>"+
                              "<img src='./Images/sorry.webp' class=' a card-img-top' alt='...'>"+
                             " <div class='card-body'>"+
                                "<h5 class='card-title'>"+" Sorry ! Out of our Scale"+"</h5>"+
                                "<p class='card-text'>"+"There aren't enough words in the world to express how sorry I am."+"</p>"+
                             " </div>"+
                            "</div>"
                            );
                            }