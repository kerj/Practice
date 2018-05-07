$(document).ready(function() {
  $('#breathButton').click(function() {
    if($('#breathA').val() == '1'){
      $('#bleedQ').removeClass('hidden');
      $('#breathQ').addClass('hidden');
      $('.hospital').addClass('hidden');//next question
    } else {
      $('.hospital').removeClass('hidden');//GO TO HOSPITAL
    }
  });
});
() =>
function()

$(document).ready(function() {
  $('#submit-quiz').click(function(event) {
    event.preventDefault();
    var frontback = $('.frontback').val();
    var platform = $('.platform').val();
    var area = $('.area').val();
    var job = $('.job').val();
    //if else branch used to populate #languageinfo div on index.html
    if (frontback === "front" && area != "mobile" && platform != "android") {
      //css js
      $('#language-info').html('<div class="row"><img src="img/js.png" alt="" class="col-md-6"><img src="img/css.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">CSS | Design | Javascript</h2></div><div class="row"><p>CSS is the language for describing the presentation of Web pages, including colors, layout, fonts, and other stylistic choices. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, and printers. HTML — used for building the structure of the page — and CSS — used for the visual layout — are the two basic languages involved in the building of web pages and web applications.<br><br>JavaScript is the only programming language understood by all web browsers, making it the most common language for web and mobile development.</p>');
    }else if (frontback === "front" && area === "mobile" || platform === "android"){
      //java android
      $('#language-info').html('<div class="row"><img src="img/android.png" alt="" class="col-md-6"><img src="img/java.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">JAVA | ANDROID</h2></div><div class="row"><p>Java is a favorite of enterprise companies, but its appeal is broader as well: it is one of the most popular of all programming languages, and it is used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you are interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn</p>');
    }else if (frontback === "back") {
      if (area === 'server') {
        if (platform === 'windows' && job != "small" && area != 'mobile') {
          //c#
          $('#language-info').html('<div class="row"><img src="img/dotnet.png" alt="" class="col-md-6"><img src="img/csharp.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">C# | .NET</h2></div><div class="row"><p>C# is most popular among bigger established businesses, often for building internal software. Because it has been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.</p>');
        }else if (platform === 'mac' && job != "large" && area != 'mobile') {
          //ruby
          $('#language-info').html('<div class="row"><img src="img/rails.png" alt="" class="col-md-6"><img src="img/ruby.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">Ruby | Rails</h2></div><div class="row"><p>Java is a favorite of enterprise companies, but its appeal is broader as well: it is one of the most popular of all programming languages, and it is used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you are interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn</p>');
        }else {
          //php drupal
          $('#language-info').html('<div class="row"><img src="img/drupal.png" alt="" class="col-md-6"><img src="img/php.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">PHP | Drupal</h2></div><div class="row"><p>PHP is by far the most popular backend language today, with 80 percent of websites utilizing it "server-side". It is perhaps best known for it is use in content management systems like Wordpress, Drupal, and Joomla. But the versatility of the language and the frameworks it powers make employment options numerous and diverse. If you are keen to work for a fast paced agency that builds websites for lots of clients, or maintain the security and stability of a huge complex of government websites, or if you like the idea of building out small sites for brands, businesses, and organizations - In any of these cases, PHP would be a great way to go.</p>');
        }
      }else {
        if (platform === 'android' || area === 'mobile') {
          //java android
          $('#language-info').html('<div class="row"><img src="img/android.png" alt="" class="col-md-6"><img src="img/java.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">JAVA | ANDROID</h2></div><div class="row"><p>Java is a favorite of enterprise companies, but its appeal is broader as well: it is one of the most popular of all programming languages, and it is used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you are interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn</p>');
        }else if (platform === 'mac') {
          //ruby rails
          $('#language-info').html('<div class="row"><img src="img/rails.png" alt="" class="col-md-6"><img src="img/ruby.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">Ruby | Rails</h2></div><div class="row"><p>Java is a favorite of enterprise companies, but its appeal is broader as well: it is one of the most popular of all programming languages, and it is used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you are interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn</p>');
        }else if (platform === 'windows') {
          //c# .net
          $('#language-info').html('<div class="row"><img src="img/dotnet.png" alt="" class="col-md-6"><img src="img/csharp.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">C# | .NET</h2></div><div class="row"><p>C# is most popular among bigger established businesses, often for building internal software. Because it has been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.</p>');
        }else {
          //ruby rails
          $('#language-info').html('<div class="row"><img src="img/rails.png" alt="" class="col-md-6"><img src="img/ruby.png" alt="" class="col-md-6"></div><div class="row"><h2 class="language-title">Ruby | Rails</h2></div><div class="row"><p>Java is a favorite of enterprise companies, but its appeal is broader as well: it is one of the most popular of all programming languages, and it is used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you are interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn</p>');
        }
      }
    }
  });
});
