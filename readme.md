# Bubble cursor - ex02 if/else
O meu objetivo com este exercício de código criativo segundo condições, foi o de criar uma composição baseada na posição do cursor do rato no ecrã.
Deste modo, quis criar um círculo que acompanhasse o movimento do nosso cursor que vai aumentando e diminuindo o seu tamanho através do aumento do seu raio até um limite de 200 pixeís e um tamanho mínimo de 20 pixeís. Esta transformação acontece gradualmente mais depressa/devagar com base na posição do cursor no canvas que para esta condição se encontra dividido em 4 quadrantes.
    No quadrante superior esquerdo a alteração do tamanho do círculo congela.
    No quadrante superior direito a alteração do tamanho do círculo acontece em 20 pixeís por segundo.
    No quadrante inferior direito a alteração do tamanho do círculo aumenta para 40 pixeís por segundo.
    No quadrante inferior esquerdo a alteração do tamanho do círculo passa para 60 pixeís por segundo.

Para trazer mais vida a esta composição interativa acrescentei uma condição que consiste em criar um número aleatório de até 10 círculos menores e temporários (que crescem ligeiramente de tamanho) quando o círculo original, que acompanha o cursor, toca nas bordas do canvas. Quando isto acontece, o círculo original também muda de cor para uma cor aleatória.