import React from 'react'
import './Home.css'
import ImageGallery from '../../Components/ImageGallery/ImageGallery'
import imgCarusel1 from '../../Media/carusel-2.png'
import imgCarusel2 from '../../Media/carusel-1.png'
import imgCarusel3 from '../../Media/carusel-3.jpg'
import ImageCollage from '../../Components/ImageCollage/ImageCollage'
import CardScroll from '../../Components/CardScroll/CardScroll'
import LabelHome from '../../Components/LabelHome/LabelHome'

const images = [
    [imgCarusel1,'GREAT VARIETY OF STYLES AND DESIGNS TO YOUR TASTE'],
    [imgCarusel2,'DESIGN YOUR OWN STYLE'],
    [imgCarusel3,'FAST AND RELIABLE SHIPPING']
]

const elementos = [
    ["Sublime Print. We print ideas.","Sublime Print is your creative platform where you can personalize and print clothes, accessories and much more. We have more than 250 different products in our range, which we print on demand and according to your ideas. Visit our Platform and discover thousands of designs from creative minds around the world. Or create your own product in the Design Tool, where you'll find a huge selection of designs, fonts, and your own designs or photos.", '228,241,245,1', '125,189,245,1', require('../../Media/scroll1.png')],
    ["Convincing quality and variety of designs with Sublime Print","Sublime Print offers you t-shirt printing with the best quality. Whether it's funny t-shirts, I love t-shirts or t-shirt printing in general, you're in good hands with us. With our flex, flock or digital printing processes, you will exclusively get the best for your product. Although at Sublime Print we don't just print t-shirts. You can also design many other products. At Sublime Print you can print sweatshirts, aprons, hoodies, bags or mugs. They are also a great gift idea! On the page of the specialist in individual t-shirt printing you will find personalized gifts for every occasion.", '228,241,245,1', '125,189,245,1', require('../../Media/scroll2.png')],
    ["T-shirt printing for groups","Do you need shirts, pants or jackets for a whole team? Then TeamShirts is the right place for you! Designing them is very easy, even if you want to print different player names and numbers for your team. We also help you translate your ideas. TeamSublime is the space for sports teams, clubs, companies, school groups, fans, bachelor and bachelorette parties and family anniversaries. The larger your team, the more you can save.", '228,241,245,1', '125,189,245,1', require('../../Media/scroll3.png')],
  ];

export default function () {
  return (
    <div>
        <ImageGallery images={images}/>
        <ImageCollage/>
        <div className='containerCardDescriptions'>
            { elementos.map(([title, text, hueA, hueB, img], index) => (
                <CardScroll title={title} text={text} hueA={hueA} hueB={hueB} img={img} key={index} />
            ))}   
        </div>
        <LabelHome/>
    </div>
  )
}
