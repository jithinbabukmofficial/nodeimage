const fs = require('fs')
const { createCanvas, loadImage, registerFont } = require('canvas')
registerFont('Raleway-SemiBold.ttf', { family: 'Raleway-semi' })
registerFont('Raleway-Bold.ttf', { family: 'Raleway-bold' })
registerFont('OpenSans-SemiBold.ttf', { family: 'Open-sans' })

const createimage = async () => {
  try {
    const width = 1200
    const height = 1200

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    context.fillStyle = '#43A047'
    context.fillRect(0, 0, width, height)

    context.textBaseline = 'top'

    // user box 
    context.fillStyle = '#fff';
    context.shadowColor = '#727272';
    context.shadowBlur = 20;
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 4;
    context.fillRect(144, 275, 911, 507);

    // user header
    context.fillStyle = '#43A047'
    context.shadowColor = '#fff';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillRect(144, 317, 911, 126)


    context.fillStyle = '#fff'
    context.font = '72px Raleway-semi'
    context.fillText('Wobo Souq', 445, 337)

    // bottom text
    context.fillStyle = '#fff'
    context.font = '64px Raleway-semi'
    context.fillText('Welcome onboard', 318, 931)


    context.fillStyle = '#333333'
    context.font = '40px Raleway-bold'
    context.fillText('Jithin Babu K M', 482, 482)


    context.fillStyle = '#43A047'
    context.font = '24px Open-sans'
    context.fillText('Web Developer', 482, 530)

    context.fillStyle = '#43A047'
    context.font = '24px Open-sans'
    context.fillText('Charge', 482, 610)

    context.fillStyle = '#333333'
    context.font = '24px Raleway-bold'
    context.fillText('1000-D', 482, 643)

    context.fillStyle = '#43A047'
    context.font = '24px Open-sans'
    context.fillText('Location', 482, 680)

    context.fillStyle = '#333333'
    context.font = '24px Raleway-bold'
    context.fillText('Calicut/India', 482, 718)

    const logo = await loadImage('./logo.png')
    context.drawImage(logo, 237, 337, 70, 85)

    const userimage = await loadImage('./user.jpeg')
    context.drawImage(userimage, 183, 479, 267, 267)


    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./test.jpg', buffer)


    
  } catch (error) {
    console.log(error)
  }
}

createimage()