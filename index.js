//👉 HTML :- stand for Hyper Text Markup languane

/* hypertext means text which contain links to other text.
   Markup language : it s a way to give instruction to a computer about how 
                    content should be displayed and organised.
  Ex:
  <p> this is <strong>Bold</strong>text.</p>


 👉 history: Early Begining(1980s):
  the concept of hypertext was proposed by computer scientist TED NELSON in 1960s.
  TIM BERNERS-LEE , a british computer scientist ,introduce WWW and develop first HTML.

  HTML2.0(1995)  -- HTML3.2(1997)---and HTML4.0(1997-1999)
  html 4 introduced significant improvements, including better support for FORMS<SCRIPT and STYLESHEET.
  it was a cruicial step toward mordern web development.

  HTML 5 (2014): html5 was a major milestone , with a focus on multimedia , improved SEMANTICS,
   and better support for web application .it introduced new elements likes ,
   <video>, <audio> ,and <picture>. html5 made web development more versatile and capable.


@👉 HTML SYNTEX :
   <h1>    hello it is content part   </h1>
openingtag     content               closing tag

and combination of opening and closing is html element.


@👉  HTML TIPS: 
   the file extension must be .html or .htm
   MS-DOS and window 3.1 , had a limation on the number of character in a file name .
   previos only  in three letter name are supported .
   EX : .EXE  .TXT  .DOC  .BAT .COM .ZIP

   the file must be  index.html  because it's a defaultpath of our homepage 
      or the root of our website
  
@👉 HTML document/ structure :
  <!DOCTYPE html> --------->  let the browser know we work on HTML 5 so we can use the properties of it 
                               only one time at top
<html lang="en">  ----------->  root of html document
<head>-----------------> contains information about html doc.
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>-------------> defines a large heading 
    <link rel="stylesheet" href="style.css">
</head>
<body>  ------------------>  contain everything we want to display in web page.
    


    <link rel="stylesheet" href="index.js">
</body>
</html>      

----------------------------------------------------------------------------------------------
<html      lang = "eng"  >
        lang attributes for specify language of the elements content.
        "en" here specify the language code for thne element's content.

        <html lang"hi" > for hindi 
        <html lang"ko" > for korean 
        <html lang"fr" > for franch


@👉 HTML ATTRIBUTES : --
 <html      lang     = "eng"  >
        lang is attribute    "en"specifies language code for element's content 

attributes :are used along with the HTML tags to define the characterstics of the element
attributes provide additional information about elements.
-------------------------------------------------------------------------

after writing simple code of html : to run on browser
  right click on----> index.html ---> copy path-----> paste on browser 
--------------------------------------------------------------------------

@👉 HEADING TAG :                                 extension : autoclose tag,auto rename , better comment

<h1>   the content part  </h1>
opening   content        closing 
tag        part            tag

combination of opening+ content+closing = html element 

---
h1 : typically, large and bold around 24px  to 26 px or even large.
h2 :slightly smaller and around 18px to 30 px .
h3 : smaller than h2 , 16px to 24px.
h4 : generally , default 14 px to 20 px 
h5 : smaller , 12px to 18 px 
h6 : the smallest , 10 t0 16 px 

notes :-
the tag's element name is case-insensitive. EX. we also use H1 instead of h1 
A single H1 is typically use per page means only use one time .
follow the hierachy from H1 to h6 consistently,

question :
 what happen if we skipped heading levels, such as going from <h1> to <h3> ?
 ans: skipped heading level can confused both user and serach engine .its best to 
    maintain a proper hierachy structure for better accessibility and SEO.

Q how many h1 tag should be used in a single page?
ans: Traditional approach : use only one 
    <h1> tag for the main title or heading of the entire page.</h1>

--------------------------------------------
@👉 paragraph tags
!----------------------------------------------------------------->
 <p>   the content part  </p>
opening   content        closing 
tag        part            tag

. the <p> tag define a paragraph.
. browser automatically add a single blankline before and after each <p> element.

Q how do you create a paragraph using <p> tags
 sol.<p>hewhfjcbdsj khdhc jhsd  jhc jh cjhsd cuebc sj,hdc jhd jhsdsjc mn h</p>
Q can you nest other html element inside a <p> tag?
 sol:NO, the <p> tag is a block-level element,and it can not contain block leve element
     like other paragraph or heading .Howerver,you can include inline element like 
     <strong> , <em> , and links .

note: no , matter how much WHITESPACE you are us einside HTML element content
     (Which can include one or more space characters, but also line breaks),
     the HTML parser reduces each sequence of whitespace to a single space 
     when rendering the code.      
-----------------------------------------
@ <br> tag -- for line break and self closing tags
@ <hr> tag -- for printing a horizontal line in web page

------------------------------------------
@ comment 
<!--  comment here -->
comment allow the developer to leave notes their code and it's functionality or
 to indicate necessary changes for the future .
 
? -------------------------------------------------------------------------->
 @👉 text formatting tags 
!---------------------------------------------------------------------------->
   notes:HTML formatting involves enhancing the Visual-presentation of text.it enable text 
         manupulation for improves aesthetics , elemanating the need of css.
         Various formatting tags within HTML facilitate techniques such as bold ,italic ,underline,
         enhancing the prominence and emphasis.

 <hr> --- for horizontal line 
 <br> ----- break a line and continue to the next line 
 <strong> -- represent strong importance.for making text BOLD
 <em>---represent emphasized text --------- ------ for ITALIC
 <u>----for underlined the text 
 <s>-----represent strike through text( crossed out) 
 <sub>--represent subscript text (lower amd smaller).
 <sup>--represent superscript text( upper amd smaller).\
 <pre>--represent preformatted text, preserving spaces and line breaks.
 <kbd>--represent keyboard input indicating that the enclosed content should be
      treated as something a user type on a keyboard.it is used to show the 
      example of keyboard command or shortcut.
 <abbr>--use for "abbreviation" and is mark up abberviations or acroyms in your content.
 <mark>--heigh_light and mark aportion of text,typically result in yellow background.
 <small>--enclosed text should display in smaller fontsize.
 <del>--represent delete or removed .browser typically render text with a text strike 
        to indicate it has been deleted .
 ---------------------------------------------------------
 @👉 inline  style CSS
 <p style="color: rgb(236, 32, 32);">the use of inline css is given here </p>
---------------------------------------------------------------------------------

@👉 Anchor Tag
 the <a> tag define a hyperlink, which is used to link from one page to another.
               url
 < a href="https://google.com">Google </a>
 href=hypertext reference
              
?-------------------------------------------------------------------------------------->
 <!--* HTML ANCHOR TAG - ATTRIBUTES
-- *---------------------------------------- -->
        href     : Specifies the URL or destination the link points to.
                <a href="https://www.google.com">google</a>
        target   : Specifies where the linked content will be displayed (e.g., _blank for a new window/tab).
                  <a href="https://www.google.com" target="_blank">google in new tab</a> <br><br>
        download : Suggests that the target will be downloaded when clicked.
                  <a href="Poppins.zip" download="" target="_blank">google doc download</a> <br><br> 
        rel      : Describes the relationship between the current page and the linked page.

        title    : Provides additional information when hovering over the link.
        <a href="https://www.google.com" target="_blank" title="click to open google">google in new a tab</a> 
        id       : Assigns a unique identifier to the anchor for linking within the page.

        class    : Assigns a class for styling or JavaScript interactions.

        style    : Applies inline CSS styling to the anchor.
        tabindex : Specifies the tab order when navigating using the keyboard.
        accesskey: Defines a keyboard shortcut to activate the link.
        aria-*   : Attributes for accessibility purposes (e.g., aria-label). 
----------------------------------------------------------------
   
  <!--*Q 1: How can you create a link within the same webpage that takes the user to 
          a specific section or element on the page? 
      sol:  To create a link that takes the user to a specific section or element within the same webpage
      , you can use the anchor (a) tag's href attribute along with the id attribute of the target element.

       <h1>Anchor Tag</h1>
          <p>redirecting to the next para by clicking on anchor text</p>
            <h2>Home</h2><hr>
             <a href="#our_services"> go to services</a>
          <p>Lorem,accusantiu.</p><br><br><br><br><hr>
            <h2>arena </h2><hr>
          <p>Lorem,  accusantiu.</p><br><br><br><br><hr>
            <h2>contact</h2><hr>
          <p>Lorem, ipsum accusantiu.</p><br><br><br><br><hr>
            <h2>our services</h2><hr id="our_services">
          <p>Lorem, ipsum dolor sit pariatur accusantiu.</p><br><br><hr>

          and for sooththing the scroll we can also use this inside <head tag>

          <style>
               html{  scroll-behavior: smooth;
                  }
           </style>


  <!--* 2: What's the difference between relative and absolute URLs in the href attribute? -->
  <!-- Relative URLs are URLs that are relative to the current page's URL. 
  Absolute URLs are complete URLs, including the protocol (http/https) and domain. -->
   absolute path : root folder ex:
       <a href="C:\Users\Lenovo\Desktop\HTML&CSS NOTES\Project\Poppins.zip" download="" target="_blank">google doc download</a> <br><br> 
   relative path : current file/folder basic:
      <a href="Poppins.zip" download="" target="_blank">google doc download</a> <br><br> 


  <!--* 3: How does the download attribute work in the anchor tag? -->
  <!-- The download attribute suggests that the linked resource should be downloaded instead 
       of navigated to,prompting the user to download the file. -->
   <a href="Poppins.zip" download="" target="_blank">google doc download</a> <br><br> 

  <!--* 4: How do you create an HTML link that opens the user's default email client
            with a specific email address? --> the email is also visible at bottom
  we should use : 
    <a href="mailto:abhithakur007120@gmail.com">send email</a>

  <!--* 5: How can you create a clickable link in HTML that allows users to directly
           initiate a phone call when clicked? -->
  <!-- To create a link that enables users to initiate a phone call when clicked, you can
       use the anchor tag's href attribute with the tel: protocol.  -->
   
        <a href="tel:8527973528">call us</a> and if wanted by clicking link to join in whatsapp grp
        <a href="here paste whatsapp grp link">call us</a>
<!-- *------------------------------------- -->
<!--* BONUS: HTML ANCHOR TAG  
<!-- *---------------------------------------- -->

  <!--* ALSO WHEN TO USE QUOTES, WHEN NOT TO  -->

     ✅<a href=https://www.mozilla.org/>favorite website</a>
    ❌ <a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
    so if we add more than two attributes must use quotes properly ""
             <a href=https://www.mozilla.org/ title="The Mozilla homepage">favorite website</a>

          <!-- So the best practice is Always include the attribute quotes. 
               It avoids such problems, and results in more readable code. -->

   <!--* Single or double quotes?  -->
         <a href="https://www.example.com">A link to my example.</a>
         <a href='https://www.example.com'>A link to my example.</a>

   <!-- mixing both the quotes at the same time is wrong -->
   <!-- ❌ <a href="https://www.example.com'>A link to my example.</a> -->

  <!-- However, if you use one type of quote, you can include the other type of quote 
        inside your attribute values: -->
        <a href="https://www.example.com" title="Isn't this fun?">
             A link to my example.
        </a>

---------------------------------------------------------------------------------------------------
 👉 better comment
 //!  dch                              --------------------------
 //? blue comment ----------------------------------------------
 ////dh c hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh         
 //todo nd cccccccccccccccccccccccccccccccccccccccccccccccccccccc
 //*--------------------------------------------------------------
 --------------------------------------------------------------------------------------------------
 <p> this is < > dh  ed</p> wrong practices 
  <p> this is &lt; &gt; dh  ed</p>
?------------------------------------------------------->
@👉 HTML ENTITIES  
!------------------------------------------------------->

<!--?  HTML entities are codes used to represent special characters and symbols 
that have reserved meanings in HTML. These entities are especially important when you  
want to display characters that might conflict with HTML syntax or when you want to display 
characters that aren't directly available on your keyboard. HTML entities are represented using 
an ampersand (&) followed by a code and a semicolon (;). -->

<!-- &lt;    👉 Less than sign (<)
     &gt;    👉 Greater than sign (>)
     &amp;   👉 Ampersand (&)
     &quot;  👉 Double quotation mark (")
     &apos;  👉 Single quotation mark or apostrophe (')
     &nbsp;  👉 Non-breaking space ( )
     &copy;  👉 Copyright symbol (©)
     &reg;   👉 Registered trademark symbol (®)
     &trade; 👉 Trademark symbol (™)
     &hearts;👉 Heart symbol (♥)                                                                   -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>This is an example of a &lt;p&gt; tag.</p>
    <p>&copy; 2023 PapTechnical Company. All rights reserved.</p>
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Entities Example</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");
      html {
        font-family: "Poppins", sans-serif;
      }
    </style>
  </head>
  <body>
    <p>
      &lt;: Less than sign (<br />
      &gt;: Greater than sign (>)<br />
      &amp;: Ampersand (&amp;)<br />
      &quot;: Double quotation mark (")<br />
      &apos;: Single quotation mark or apostrophe (')<br />
      &nbsp;: Non-breaking space ( )<br />
      &dollar;: Dollar Sign ($) <br />
      &copy;: Copyright symbol (©)<br />
      &reg;: Registered trademark symbol (®)<br />
      &trade;: Trademark symbol (™)<br />
      &hearts;: Heart symbol (♥)
    </p>
  </body>
</html>

<!-- *------------------------------------- -->
<!--* INTERVIEW QUESTIONS: HTML ENTITIES  
<!-- *---------------------------------------- -->
<!--? 1: When might you use the &nbsp; entity? -->
<!-- The &nbsp; entity is used to insert a non-breaking space, which prevents the browser from collapsing consecutive spaces into one. -->

<!--? 2: How would you display a trademark symbol using an HTML entity? -->
<!-- You can display a trademark symbol using the &trade; entity: &trade;. -->

<!--? 3: Why is it important to use HTML entities for special characters? -->
<!-- Using HTML entities ensures proper rendering of characters and symbols and helps avoid conflicts with HTML syntax.-->

<!--? 4: Represent the dollar sign symbol using different HTML entity methods -->
    <!-- Using Named Entity: &dollar; 
         Using Hexadecimal Numeric Reference: #x00024;
         Using Decimal Numeric Reference: &#36; 
        for more entities go to link below:
    <!-- for more https://www.htmlquick.com/reference/character-entity-reference.html -->
--------------------------------------------------------------------------------------------
!----------------------------------------------------------------->
<!--* 👉HTML IMAGE TAG  
?-- *----------------------------------------------------------- -->
<img> tag is used to embed (add) image in HTML page.
<img src ="/image.png"   alt="alt-text">
|_______|   |_______|        |_______|
specify path   relative        specify alternative text for img,if img cannot display.
  of image      URL

sort-way:enter img enter --then-- ./ then select folder and enter.
<img src="./Project/images/html.png" alt=" the html thumbnail">
 for changing the size :
 <img src="./Project/images/html.png" alt=" the html thumbnail" width="250px">
 for more updating:
 <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");
      html {
        font-family: "Poppins", sans-serif;
        scroll-behavior: smooth;
        font-weight: bold;
        text-align: center;
        background-color: #efefef;
      }
      img{
        box-shadow: rgb(100, 100, 111.0.2) 0px 7px 29px 0px;
        border-radius: 8px;
      }
    </style>
  ?------
             <h1>HTML image</h1>
          <img src="./Project/images/html.png"
          alt=" the html thumbnail" 
          width="250px"
          title="html course banner"
          loading="lazy"> // lazy loading jab tak website pe visit nhi karange tab tak imag load nhi Hoga.


<!--TODO Deprecated Tags of HTML Images  -->
<!-- align, border, hspace, vspace -->

<!--* What Not To Do  -->
<!-- ❌ <img alt="image" src="penguin.jpg" />  -->
<!-- ✅<img  alt="A Rock hopper Penguin standing on a beach."  src="penguin.jpg" /> -->
  properly write alt to rank and SEO and to understand what kind of image is it
<!-- *------------------------------------- -->
<!--* INTERVIEW QUESTIONS: HTML IMAGE TAG  
<!-- *---------------------------------------- -->
<!--? 1: How would you make an image responsive using the width attribute? -->
<!-- You can set the width attribute to a percentage value (e.g., width="100%") to make the image adjust its width based on the available space. -->
             <h1>HTML image</h1>
               <img src="./Project/images/html.png"
                alt=" the html thumbnail" 
                width="1500"
                height="1000"
                title="html course banner"
                loading="lazy">
 !in this case there was a scroll bar come vertically and horizontally
 ? for best practices we should do like this width:100% and height:auto kind of responsive image
             <h1>HTML image</h1>
             <img src="./Project/images/html.png"
             alt=" the  html thumbnail" 
             width="100%"
             height="auto"
             title="html course banner"
             loading="lazy">
? and if we want small size image but not more than 500px we do in css likewise
      img{
        max-width: 500px;
        box-shadow: rgb(100, 100, 111.0.2) 0px 7px 29px 0px;
        border-radius: 8px;
        height: auto;
        width: 100%;
        
      }
    </style>

<!--? 2: How do you create an image link using the <img> tag? -->
<!-- You wrap the <img> tag with an anchor <a> tag and provide the href attribute in the <a> tag. -->
                  <h1>HTML image</h1>
                 <a href="./Project/images/html.svg" target="_blank">
                 <img src="./Project/images/html.png"
                  alt=" the html thumbnail" 
                  width="400px"
                  height="250px"
                  title="html course banner"
                  loading="lazy">
                 </a>  //every thing inside <a>inside it is clickable</a>

   ? another way is using map techniques 
                     <img src="./Project/images/html.png"
                  alt="clickable world map"
                  usemap="#map"
                  width="250"
                  height="150">

                  <map name="map">
                    <area
                       shape="rect"
                       coords="0,0,125,150"
                       href="www.youtube.com"
                       alt="North area" />
                                                     </map>                
                                                <map name="map">
                                      <area
                                         shape="circle"
                                         coords="200,150,50"
                                         href="www.youtube.com"
                                         alt="central area" />
                                      <area
                                         shape="poly"
                                         coords="300,100,350,200,250,200"
                                         href="www.youtube.com"
                                         alt="south area" />
                                    </map>                                    

<!--? 3: What's the difference between relative and absolute URLs in the href attribute? -->
<!-- Relative URLs are URLs that are relative to the current page's URL. 
     Absolute URLs are complete URLs, including the protocol (http/https) and domain. -->
 ! pre-fred is absolute if we change the relative url img then it not work but absolute is root path
<!--? 4: Why is providing descriptive alt text for images important? It improves -->
<!-- accessibility for users with visual impairments and helps search engines 
     understand image content.those how cant see but able to listen.

<!-- *------------------------------------- -->
<!--* ADVANCED : HTML IMAGE TAG  
<!-- *---------------------------------------- -->
<!-- <img
  src="images/html.png"
  alt="Responsive Image"
  srcset="
    images/html-400.jpg   400w,
    images/html-600.jpg   600w,
    images/html-800.jpg   800w,
    images/html-1000.jpg 1000w
  "
  sizes="(max-width: 600px) 400px,
            (max-width: 800px) 600px,
            (max-width: 1100px) 1000px,
            1200px"
/> -->

?------------------------------------------------------------------------
! VOID ELEMENT / EMPTY ELEMENT :-----------
 Not all part of a web page use the usual pattern of having an opening tag,
  some content, and then a closing tag. some part only need a single tag to work . these
  are called "void element or empty element."
  <!-- Here are a few more examples of void elements:
    
 <img>: This is used to insert images. You only need to use <img> and provide 
 attributes like src (source) and alt (alternate text).
 <input>: This is used for input fields, like text boxes or checkboxes.
 <link>: This is used to connect to external resources like stylesheets or icons.
 <hr>: This creates a horizontal line to separate content. 
 <br> line break.
 also some like:
 <area>:define clickable area ina image.
 <col>:specify column properties for a table.
 <embed>:embed external content or plugin content.
 <meta>:provide meta data about the HTML.
 <param>:define parameter for plugins.
 <source>:specify multimedia <video>,<track>,<wbr>:word break opportunity in a text   

?-------- ------------------------------------------------------------------------------------
!👉 HTML picture Tag 💖
!------------------------------------------------------------------------------------------
 the <picture>HTML element contain zero or more <source> elements and one 
 <img> element to offer alternative versions of an image for different display/device scenarios.

<!-- *------------------------------------- -->
<!--*  HTML PICTURE TAG  💖
<!-- *---------------------------------------- -->

<!--? The <picture> element in HTML is used to provide multiple sources of an image, 
allowing the   browser to choose the most appropriate source based on the user's device,   
screen size, and other factors. This is particularly useful for responsive  
design and ensuring the best quality images are displayed. </picture> -->

<!-- SHARING IS CARING 💖  https://pixelied.com/, https://squoosh.app/ -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");
      html {
        font-family:"popping", sans-serif;
        font-weight: bold;
        text-align: center;
        background-color: #efefef;
        /* color: #fff;
            }
      img {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 8px;
          }
    </style>
  </head>
  <body>
    <h1>HTML PICTURE TAG</h1>
    <picture>
      <source srcset="./images/html.webp" type="image/webp" />
      <source srcset="./images/html.jpg" type="image/jpg" />
      <source srcset="./images/html.jpeg" type="image/jpeg" />
      <source srcset="./images/html.svg" type="image/svg" />
      <img
        src="./images/html.png"
        alt="best html course"
        width="500"
      />
    </picture>
  </body>
</html>
?-------------------------------------------------------------------------------------------
!👉 HTML Figure Tag 💖
!--------------------------------------------------------------------------------------------
 The <figure></figure>Html element represent self-contained content,potentially with an 
  optional caption, which is specified using the <figcaption></figcaption>  element.

 <body>
    <h1>HTML FIGURE TAG</h1>
    <p>
      this is an amazing YouTube channel for learning web
      development. Their tutorials are easy to follow and enjoyable. By watching
      their videos, you can learn the skills needed for a web development job.
      Check out Technical to boost your chances of getting hired in this
      field!
    </p>
    <!-- add figure tag here  -->
    <figure>
      <img src="./images/html.webp" alt="html thumbnail" width="500" height="auto">
      <figcaption>the best html course ever made in earth</figcaption>
    </figure>
    <p>
      this is an amazing YouTube channel for learning web
      development. Their tutorials are easy to follow and enjoyable. 
      
    </p>
  </body>
</html>
<!-- *------------------------------------- -->
<!--*  IMPORTANT NOTE ON HTML FIGURE TAG  
<!-- *---------------------------------------- -->
<!--
  ? 1: The figure element is particularly useful for images, illustrations, diagrams, videos, audio clips, and other types of media. 

? 2: Use the alt attribute for images within the figure element to provide alternative text for accessibility. 

? 3: The figure element helps improve accessibility and search engine optimization by indicating the content and its context. 
-->
?-------------------------------------------------------------------------------------------
!  👉 HTML LIST 💖
!--------------------------------------------------------------------------------------------
     ordered list<ol></ol>                                      unordered list<ul></ul>               
  <ol list-style-type: decimal;>                                                          <ul>
    <li>first number</li>                                           <li>first number</li>
    <li>second number</li>                                          <li>second number</li>
    <li>third number</li>                                           <li>third number</li>
  </ol>                                                        </ul>

<!-- *------------------------------------- -->
<!--*  HTML LIST - ORDER VS UNORDERED TAG  
<!-- *---------------------------------------- -->
<!-- 
?Unordered List (<ul>) Example:  An unordered list is used to create a list of items 
?--that are not in any particular order. Each list item is marked with a bullet point.
 
! --Unordered List (<ul>) Styles:

  Disc (list-style-type: disc;): Default style - filled circles.
  Circle (list-style-type: circle;): Hollow circles.
  Square (list-style-type: square;): Squares.
  None (list-style-type: none;): No bullet points.
   
!----Ordered List (<ol>) Example:
? An ordered list is used to create a list of items in a specific order, typically indicated by numbers.
? ---Ordered List (<ol>) Styles:

  Decimal (list-style-type: decimal;): Default style - decimal numbers.
  Lowercase Letters (list-style-type: lower-alpha;): Lowercase letters (a, b, c).
  Uppercase Letters (list-style-type: upper-alpha;): Uppercase letters (A, B, C).
  Lowercase Roman Numerals (list-style-type: lower-roman;): Lowercase Roman numerals (i, ii, iii).
  Uppercase Roman Numerals (list-style-type: upper-roman;): Uppercase Roman numerals (I, II, III) 
-->
<!-- *------------------------------------- -->
<!-- INTERVIEW Q:  HTML LIST 
<!-- *---------------------------------------- -->

<!--? 1: What is the significance of the type attribute in ordered lists? -->
<!-- Decimal Numbers (type="1"): This is the default style. It uses regular decimal numbers. 
      <ol type="A">
            <li>class</li>
            <li>hello</li>
            <li>hero</li>
      </ol>
            
  Uppercase Letters (type="A"): It uses uppercase letters (A, B, C) as list item numbers.
Lowercase Letters (type="a"): It uses lowercase letters (a, b, c) as list item numbers.
Uppercase Roman Numerals (type="I"): It uses uppercase Roman numerals (I, II, III) as list item numbers.
Lowercase Roman Numerals (type="i"): It uses lowercase Roman numerals (i, ii, iii) as list item numbers. -->

<!--? 2: What is the use of the start attribute in ordered lists? -->
              <ol type="1" start="10">
                         <li>class</li>
                         <li>hello</li>
                         <li>hero</li>
               </ol>
<!--? 3: Explain the concept of nested lists  -->
<ul>
  <li>fruits
    <ol>
      <li>banana</li>
      <li>apple
        <ul>
          <li>red</li>
          <li>green</li>
        </ul>
      </li>
      <li>pears</li>
    </ol>
  </li>
  <li>vegetables</li>
  <li>meats</li>
</ul>
<!--? 4: How do you create a horizontal navigation menu using an unordered list? -->
? alt+up arrow : to move the text to up and uped text to down
  <ul style="list-style: none; display:flex; gap: 20px; ">
  <li><a href="www,google.com" target="_blank">Home</a></li>
  <li>about</li>
  <li>services</li>
  <li>contact</li>
</ul>
<!-- *------------------------------------- -->
!     👉 HTML TABLE TAG 💖 
<!-- *---------------------------------------- -->
HTML tables allow web developers to arrange data into rows and columns.
   we must write everything inside table tag.
   <table></table> Element:define html tables,which is used to org-anise data into rows and columns.
   <tbody></tbody>Element:groups the main contents(data rows)of html tables.
   <thead></thead>Element:group the header content(table heading)of html table.
   <th></th>element:a header cell(table heading)within a table.
   <td></td>element: represent a data cell within a html table.
   <tr></tr>element:define row within a html table.

<!--? The <table> HTML element represents tabular data — that is, information presented
 in a two-dimensional table comprised of rows and columns of cells containing data. -->

<!-- *------------------------------------- -->
<!--*  LIST OF DEPRECATED TAGS - HTML TABLES
<!-- *---------------------------------------- -->

<!-- 
  <table align="...">: Used to horizontally align the table within its containing element.
  <tr align="...">: Used to horizontally align the content of a table row.
  <td align="...">: Used to horizontally align the content of a table cell.
  <th align="...">: Used to horizontally align the content of a table header cell.
  <bg.color="...">: Used to set the background color of a table, row, or cell.   don't put . between them
  <border="...">: Used to define the border width of a table.
  <frame="...">: Used to specify whether a table should have outer frames.
  <rules="...">: Used to define the presence and types of horizontal and vertical rules within a table.
  <width="...">: Used to set the width of a table, row, or cell. 
  cellspacing & cellpadding for the cell padding and outer spacing

  -->
 table{
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
      }
      tr,td,th{
        border: 1px solid rgb(0, 0, 0);
        padding: 10px;
      }
       
<!-- *------------------------------------- -->
<!--*  INTERVIEW Q: HTML TABLES
<!-- *---------------------------------------- -->
<!--? 1: What is the purpose of the <thead>, <tbody>, and <tfoot> elements within a table? -->
<!--? 2: How can you create table headers using the <th> element? How is it different from using <td> for data cells? -->
<!--? 3: What is the significance of the colspan and rowspan attributes in table cells? Provide an example. -->
      <table>
  <thead>
    <tr>
      <th colspan="7">
        Time Table
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6">hours</td>
      <td>Mon</td>
      <td>tue</td>
      <td>wed</td>
      <td>thu</td>
      <td>fri</td>
      <td>sat</td>
    </tr>
    <tr>
      
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      
    </tr>
    <tr>
      
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>

    </tr>
    <tr>
      <td colspan="6" >
        lunch
      </td>
    </tr>
    <tr>
      
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td rowspan="2">Games</td>

    </tr>
    <tr>
      
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      <td>Math</td>
      

    </tr>
  </tbody>
</table>
<!-- SHARING IS CARING 💖 https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse -->

 ?--!-- *------------------------------------- -->
!   👉 HTML IFRAME TAG 💖 
?!-- *---------------------------------------- -->

<!--? The <iframe> HTML element represents a nested browsing context, 
       embedding another HTML page into the current one. -->

       <iframe   src="URL"         title="abc">             </iframe>  
    the src attributes define     for screen reader
     the url of the page to embed


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- keep in mind we cannot embed all the sites ex. google, yt direct --
       go to --shared--embedded and copy then paste -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pv3Ss8o9gGQ?si=0AUi7yerajKfbsPf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    https://www.wikipedia.org/
  </body>
</html>
 ?--!-- *------------------------------------- -->
!   👉 HTML AUDIO TAG 💖 
?!-- *---------------------------------------- -->
<!--? Audio (<audio>): The <audio> element is used to embed audio content in a webpage. 
<!--? It supports various audio formats and provides controls for playback. -->
<audio controls>
<source src="./audio/audio_mp3" type="audio/mpeg" />  both audio same for backup we use these two
<source src="./audio/audio_wav" type="audio/wav" />
your browser does not support audio element
</audio>

ex:-
<audio controls>
  <source src="./Project/audio/audio_thapa  .mp3" type="">
  <source src="./Project/audio/audio_thapa.wav">
</audio>
<!-- *------------------------------------- -->
<!--* HTML AUDIO TAG - Attributes
<!-- *---------------------------------------- -->
<!-- 
controls: Adds playback controls (play, pause, volume, etc.). above already used
autoplay: Starts playback automatically. loop: Repeats the media indefinitely.
preload: Specifies if the media should be loaded when the page loads. poster:
Displays an image before the media loads. 
-->
<!-- *------------------------------------- -->
<!--* HTML AUDIO TAG - Commonly supported audio formats
<!-- *---------------------------------------- -->
<!-- 
? MP3 (audio/mpeg): A widely supported format for audio. Provides good quality with reasonable file size. 

? WAV (audio/wav): An uncompressed audio format with excellent quality, but larger file sizes. 

? Ogg Vorbis (audio/ogg): A free and open audio format that provides good quality with smaller file sizes compared to MP3. 
-->
 ?--!-- *------------------------------------- -->
!   👉 HTML VIDEO TAG 💖 
?!-- *---------------------------------------- -->

<!--? The <video> HTML element embeds a media player which supports video playback into the document. -->
   <video control autoplay loop muted poster="./images/html.png">
   <source src="./video/tha pa.mp4" type="video/mp4"/>
   <source src="./video/tha pa.mp4" type="video/webm"/>
     browser does not support the video element.
   </video>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");
    html {
      font-family: "jost", sans-serif;
      background-color: #efefef;
    }
    h1 {
      font-weight: bold;
    }
     video{
        border-radius: 10px;
      }
  </style>
  <body>
    <h1>HTML VIDEO TAG</h1>
    <!-- add video tag here  -->
    <video controls loop poster="./Project/images/html.jpg" width="500">
  <source src="./Project/video/thapatech.mp4" type="video/mp4">
  <source src="./Project/video/thapatech1.webm" type="video/webm">
</video>
  </body>
</html>

?--? When using the autoplay attribute with the <video> element, some browsers might require the video to be muted in order for the video to start playing automatically. This is due to browser policies regarding auto playing media with sound, which can be intrusive to users. -->

<!-- *------------------------------------- -->
!!--* HTML VIDEO TAG - Commonly supported video formats
<!-- *---------------------------------------- -->
<!--
? MP4 (video/mp4): A widely supported format that provides good quality with efficient compression. Recommended for cross-browser compatibility. 
? WebM (video/webm): A modern open-source format developed by Google with good compression and quality. Well supported in most modern browsers. 
? Ogg (video/ogg): A free and open multimedia format that includes video, audio, and subtitles. It's supported but less commonly used. -->

 ?--!-- *------------------------------------- -->
!   👉 HTML FORMS TAG 💖 
?!-- *---------------------------------------- -->
?!--? The <form> tag is used to create an HTML form for user input. -->

?!--? The <input> HTML element is used to create interactive controls for web-based forms to
?         accept data from the user. We must write inside the tag. -->

    <input   type ="text"   name="username">
|_______|   |____|        |_______|
            attribute        

 we have multiple value for the Type attribute.
   <h1>HTML FORMS</h1>
  <form action="">
     <div >
      <label for=""> Enter username</label>
      <input type="text" id="username" />
     </div>
     <div >
      <label for="email">Enter your Email</label>
      <input type="email" id="email" />
      </div>
      <div>      
      <label for="textarea">Message</label>
      <textarea name="" id="textarea" cols="30" rows="10"></textarea>
     </div>
     <input type="submit" value="submit" />
  </form>
<!-- *------------------------------------- -->
!--* HTML Types of inputs in HTML Form
<!-- *---------------------------------------->
<!-- 1: Text Input (<input type="text" />): Allows users to enter a single line of
text. 
2: Password Input (<input type="password" />): Hides the entered text for
secure password entry. 
3: Email Input (<input type="email" />): Validates and
formats input as an email address. 
4:Number Input (<input type="number" />):
Accepts numeric input and provides increment/decrement controls. 
5:Radio Buttons (<input type="radio" />): Allows users to choose a single option from a group of
options. 
6: Checkboxes (<input type="checkbox" />): Allows users to select
multiple options. 
7: Dropdowns (<select> and <option>): Provides a list of options for users to choose 
from.  
8: <datalist> Provide a predefined list of options for autocomplete 
suggestions.
9: Textarea (<textarea>): Allows users to enter multiple lines of
 text.
10:File Upload (<input type="file">):  Lets users choose and upload files from 
their device.
11: Submit Button (<input type="submit">):  Submits the form data to the server.
 -->
<!-- *------------------------------------- -->
?!--* HTML FORM TAG  - ATTRIBUTES
<!-- *---------------------------------------- -->
  <form action="#">
    <label for="email">Enter your Email :</label>
    <input type="email" 
    placeholder="Enter email" 
    name="email"
    required
    autocomplete="off"
    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    size="20"
    value="abhithakur@gmail.com"
    readonly
    disabled
    />
    <br>
    <input type="submit" value="Login">
  </form>

<!-- *------------------------------------- -->
?!--* INTERVIEW Q:  HTML FORM ELEMENTS 
<!-- *-------------------------------------- -->
<!--? 1: Difference between ID vs Class attribute?  -->
<!-- Multiple elements in HTML can have the same class value, whereas a value of id
attribute must be unique. -->

?!--? 2: Difference between Div vs Span Tag?  -->
?!-- <div></div>
?  Element: Stands for "division." 1: Block-level element: It creates a block-level
?  container that typically represents a section or division of content. 2:Creates
?  a new line before and after itself by default.

!  <span></span>
Element: Inline-level element: It doesn't create a new line; it's used for
applying styles to specific parts of text within a larger block of content.
Doesn't create any visual change by default; it's used for applying CSS styles
or scripting. -->

!     <div>  
  <h1>Welcome to <span style="color: red"> Our Website </span></h1>
  <p>This is a description of our services
     div stand for division and gives a new line block level .</p>
  </div>
<!-- *------------------------------------- -->
?!--* HTML FORM TAG  - MORE ON INPUT TYPES
<!-- *---------------------------------------- -->
<!-- 1: Range Input (<input type="range">): Allows users to select a value from a specified range using a slider. 
2: Date Input (<input type="date">): Provides a date picker for selecting dates.
3: Time Input (<input type="time">): Allows users to input a specific time.
4: Color Input (<input type="color">): Presents a color picker for selecting colors.
5: URL Input (<input type="url">): Validates and formats input as a URL.
6: Search Input (<input type="search">): Provides a search input field with a clear button.
7: Month Input (<input type="month">): Allows users to select a month and year.
8: Week Input (<input type="week">): Allows users to select a specific week and year.
!     -------------------------------->
  <!-- <div>
    <h1>Welcome to <span style="color: red"> Our Website </span></h1>
    <p>This is a description of our services.</p>
  </div>
  <h3>advanced HTML Forms</h3>
  <form action="#">
    <div>
      <label for="range">Range: </label>
      <input type="range" name="volume" min="0" max="100" value="70" />
    </div>
    <br />
    <div>
      <label for="birth-date">birth-date: </label>
      <input type="date" name="birth-date" />
    </div>

    <br />
    <div>
      <label for="appointmentTime">appointmentTime: </label>
      <input type="time" name="appointmentTime" />
    </div>

    <br />
    <div>
      <label for="favoriteColor">favoriteColor: </label>
      <input type="color" name="favoriteColor" />
    </div>

    <br />
    <div>
      <label for="website">website: </label>
      <input type="url" name="website" placeholder="Enter website URL" />
    </div>

    <br />
    <div>
      <label for="searchQuery">searchQuery: </label>
      <input type="search" name="searchQuery" placeholder="Search..." />
    </div>

    <br />
    <div>
      <label for="expiryDate">Month & Year: </label>
      <input type="month" name="expiryDate" />
    </div>

    <br />
    <div>
      <label for="week">vacationWeek: </label>
      <input type="week" name="vacationWeek" />
    </div>
  </form>
    <br />
?-----------------------------------------------
!    <!--? Semantic HTML5 Form Elements:
?-----------------------------------------------
Semantic HTML5 form elements like <label>, <fieldset>, and <legend> provide better 
structure and accessibility to forms.
?<label>: Associates text labels with form elements for better user understanding.
?<fieldset>: Groups related form elements together, creating a visual and semantic grouping.
?<legend>: Provides a caption or title for the <fieldset> element. -->
    <form action="/submit" method="post">
      <!-- add <fieldset> </fieldset> -->
    </form> 
  </body>
</html>

 ?--!-- *------------------------------------- -->
!   👉 HTML5 Semantic TAG 💖 
?!-- *---------------------------------------- -->
     Semantic elements = elements with a meaning.
     a semantic element clearly described its meaning to both the browser and the developer.
  <header>represent the introductory content for a section ,article,or entire web page.
          Ex. Contains logo , site title  etc.
  </header>
  <nav>
     Navigation menu links would all be placed in a <nav> tag.
  </nav>
  <main>
     the body of a page should go in the <main> tag.there should be one per page.
  </main>
  <article>
      represent an independent article on a webpage.Ex= blog post.
  </article>
  <section>
       represent a way of grouping together nearby content of a similar theme.
  </section>
  <aside>
     represent the content that's less important.it's mostly used  sidebars(ads).
  </aside>
  <footer>
     represent the base of a page or section. it's might include information and some site navigation.
  </footer>

<!--? Semantic HTML5 elements are an important part of modern web development as they provide
 a clearer structure to web documents and improve accessibility, search engine optimization, and styling.  -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
  </head>
  <body>
    <header>
      <!-- Header content goes here -->
      <nav>
        <!-- Navigation menu goes here -->
      </nav>
    </header>

    <main>
      <!-- Main content of the page goes here -->
      <article>
        <!-- Article content goes here -->
      </article>

      <section>
        <!-- Section content goes here -->
      </section>
    </main>

    <aside>
      <!-- Sidebar content goes here -->
    </aside>

    <footer>
      <!-- Footer content goes here -->
    </footer>
  </body>
</html>

<!-- *------------------------------------- -->
<!--*  HTML5 SEMANTIC ELEMENTS With Contents
<!-- *---------------------------------------- -->
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thapa Technical - Best for Web Developers</title>
    <style>
       Your CSS styles here 
      </style>
      </head>
      <body>
        <header>
          <div>
            <a href="#">
              <img src="images/logo.png" alt="thapa logo" height="30px" />
            </a>
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </header>
    
        <main>
          <div class="hero">
            <h2>Thapa Technical - The Best for Web Developers</h2>
          </div>
    
          <section class="about">
            <h2>About Us</h2>
            <p>
              Thapa Technical is a renowned YouTube channel that offers high-quality
              tutorials for web developers. Whether you're a beginner or an
              experienced developer, our videos cover a wide range of topics to
              enhance your skills.
            </p>
          </section>
    
          <article>
            <h2>Why Choose Thapa Technical?</h2>
            <p>
              Our channel provides in-depth tutorials, practical examples, and
              hands-on projects that empower you to become a proficient web
              developer.
            </p>
          </article>
    
          <aside>
            <h3>Latest Video</h3>
            <p>Check out our latest video: "Building Responsive Web Layouts."</p>
          </aside>
        </main>
    
        <footer>
          <p>&copy; 2023 Thapa Technical. All rights reserved.</p>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </footer>
      </body>
    </html>
    <!--* SHARING IS CARING 💖 https://developer.mozilla.org/en-US/docs/Web/HTML/Element  -->
    ?  did YOU KNOW
    !--------------------
    Single <main> tag : As a best practice .use only one <main> tags per HTML page.The <main>
                      tag should encapsulate the primary content of your webpage,excluding
                      headers,footers and sidebars.
    USE Header Wisely : While you can use multiple <header>tags, make sure they are appropriatelt.
                      placed within semantic element like <article>,section> or as introductory
                      content for the whole page.Each <header should provide relevant context.
    Avoid overuse    : use semantic element purposefully and avoid overuse them.
                      element that accurately represent your content structure and hierarchy 
                      overusing them may lead to confusion and dilution semantics.
   understanding Nesting:Understanding the heirachy and nesting rules of semantic elements.
                      for Instance,<article> and <section > can contain <header>,<footer and other
                      content,but nesting them should reflect logical relationship.
   Enhance Accessibility:Semantic elements greatly improve web accessibility. use them to 
                       create a clear structure for assistive technologies. Ensure that your content
                       remains meaningful even if CSS or other styling is disabled.
 ?--!-- *------------------------------------- -->
!   👉 HTML5 Meta TAG 💖 
?!-- *---------------------------------------- -->
? Meta Tags for Metadata :
   Meta tags are elements that provide meta data about a webpage. They are placed within the 
   <head> section of an HTML document and are not visible to users but are used by browsers, 
   search engines , and other web services to gather information about the page.


   ? <meta name="viewport" content="width=device-width, initial-scaled=1.0">:
 imp :
   set the viewport properties for responsive design.
?-------
<meta charset="UTF-8">:Specific the character encoding for the webpage, ensuring proper
                      rendering of characters.
<meta name="description" content="A brief description of the webpage">: Provide a 
                     concise description of the page's content.
                     Ex:when we search in google the below thw name of website description is same.
<meta name="keyboards" content="keyboard1 ,keyboard2 ,keyboard3 ">: Specifies                      
                     relevant keyboards for search engine (not as impactful as it used to be).
<meta name="author" content="Author's Name">: indicate the author of the web page.                                         
?<meta name="robots" content="index , follow">:Instruct search engine robots whether to index and
                  follow links on the page.

!<!DOCTYPE html>
< lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Learn web development with Thapa Technical. Explore tutorials, tips, and tricks for front-end and back-end development."
    />
    <meta
      name="keywords"
      content="web development, Thapa Technical, web developer tutorials, front-end development, back-end development, coding tutorials"
    />
    <meta name="author" content="Thapa Technical" />
    <meta name="robots" content="index, follow" />
    <!-- <meta name="robots" content="noindex, nofollow"> -->

    <title>Thapa Technical - The Best Web Developer Channel</title>
  </head>
  <body>
    <h1>Welcome to Thapa Technical - Your Web Development Learning Hub</h1>
    <p>
      Thapa Technical is your go-to channel for high-quality web development
      tutorials. Whether you're a beginner or an experienced developer, you'll
      find valuable resources to enhance your skills.
    </p>
    <p>
      Explore our tutorials on front-end development, back-end programming,
      coding best practices, and much more. Join our community of passionate
      developers and stay up-to-date with the latest web technologies.
    </p>
    <p>
      Subscribe to Thapa Technical for insightful content that will empower you
      on your web development journey.
    </p>
!  </body>

?---------------------------------------------
! HTML SEO 
?--------------------------------------------
<!-- Optimizing for Search Engines (SEO): -->
Search Engine Optimization (SEO) involves optimizing your website to improve its
visibility in search engine results. Proper use of meta tags is one aspect of
SEO. Here are some additional tips:
<!-- 
? High-Quality Content: Create valuable and relevant content that addresses users' needs.
? Keyword Research: Use relevant keywords naturally within your content.
? Descriptive Titles: Use descriptive and relevant titles for your pages (<title> tag).
? Heading Tags: Use appropriate heading tags (<h1>, <h2>, etc.) to structure content.
? Image Alt Text: Provide descriptive alt text for images.
? Internal Links: Use internal links to connect related content within your site.
? External Links: Link to reputable external sources when relevant.
? Mobile-Friendly Design: Ensure your website is responsive and mobile-friendly.
? Site Speed: Optimize your website's loading speed for better user experience. -->

?---------------------------------------------
!👉 HTMl final projects💖 
?--------------------------------------------
*/