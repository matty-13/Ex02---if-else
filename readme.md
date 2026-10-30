# Bubble cursor - ex02 if/else
O meu objetivo com este exercício de código criativo segundo condições, foi o de criar uma composição baseada na posição do cursor do rato no ecrã.
O processo da criação desta composição foi bastante auxiliada com o recurso da AI do Copilot, ao que me recorri à mesma para gerar código a partir de descrições. O código que foi gerado pela AI foi constantemente testado e verificado de modo a que correspondesse ao que quis criar, tendo então realizado tanto alguns ajustes manuais como várias outras alterações do código com o recurso do agente Copilot.

Deste modo, comecei por criar um círculo que aumenta e diminui o seu tamanho através do aumento do seu raio até um limite de 200 pixeís e um tamanho mínimo de 20 pixeís de acordo com a posição do rato no ecrã. Este passo foi desenvolvido segundo o seguinte propmt: 
    "code an if else condition where there's a circle with a radius of around 20 pixels that gets it's radius to grow 5 more pixels depending on the location of the mouse. Divide the canvas in four equal quadrants and when the mouse is on the top left quadrant it will have it's original radius of 20 pixels, then on the right top it will grow 5 pixels."

De modo a que o círculo passasse a acompanhar o movimento do nosso cursor e de modo a fazer com que a transformação aconteça mais gradualmente e com alterações de velocidade (mais depressa/devagar) com base na posição do cursor no *canvas* que para esta condição se encontra dividido em 4 quadrante, pedi ao Copilot o seguinte prompt:
    "Now make it so that the circle moves along the path of the mouse and that it's radius growth has a smooth transition between each change of size. Cap the growth of the radius at 200 pixels and make it grow at 20 pixels per second instead of growing only 5 pixels."

Deste modo, cada quadrante terá o seguinte efeito:

   1. No quadrante superior esquerdo a alteração do tamanho do círculo congela.
   2. No quadrante superior direito a alteração do tamanho do círculo acontece em 20 pixeís por segundo.
   3. No quadrante inferior direito a alteração do tamanho do círculo aumenta para 40 pixeís por segundo.
   4. No quadrante inferior esquerdo a alteração do tamanho do círculo aumenta para 60 pixeís por segundo.

De seguida, indiquei ao Copilot o seguinte prompt de modo a que o círculo não fique preso no tamanho máximo (raio de 200 pixeís) e que possa então ir aumentando e diminduindo o seu tamanho:
    "When the circle reaches the cap make it so that it goes back to it's original size gradually, just like the way it grows"

Nesta altura, fui fazendo ligeiros ajustes manuais como o aumento do frameRate para 60 (em vez de 14 originalmente dado pelo Copilot) de modo a suavizar a alteração do tamanho do círculo e a alteração do strokeWeight para 2 de modo a tornar o contorno do círculo mais visível.

Para trazer mais vida a esta composição interativa acrescentei, com a ajuda do COpilot, uma condição que consiste em criar um número aleatório de até 10 círculos menores e temporários (que crescem ligeiramente de tamanho) quando o círculo original, que acompanha o cursor, toca nas bordas do *canvas*. Quando isto acontece, o círculo original também muda de cor para uma cor aleatória. O prompt para tal, foi o seguinte:
    "Now make it so that whenever the circle hits one of the borders of the canva the colours of the circle, random colours. Also, adding to this condition, make it so that whenever the circle hits the canvas edge other circles that disappear withing 3 seconds, in a random amount but 10 being the cap."

Tendo ficado satisfeita com o resultado, quis apenas dinamizar um pouco mais estes pequenos círculos, que sugem do embate do círculo principal nas bordas do *canvas*, cresçam ligeiramente, tendo então recorrido mais uma vez ao Copilot para criar uma pequena condição de random:
`radius: random(2.5, 10),`
`radiusGrowth: random(2, 4),`
`(temporaryCircle.radius + temporaryCircle.radiusGrowth * elapsed / 1000) * 2`

