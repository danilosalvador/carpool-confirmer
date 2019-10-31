# Carpool Confirmer (Teste de Seleção)
Aplicativo Android para confirmação de caronas realizadas.

> NOTA: O código desenvolvido nesse teste é apenas para avaliação do Teste de Seleção.

# Especificação do Projeto:

## Tela de Confirmação - Motorista

Como motorista, ao finalizar uma carona, devo confirmar a viagem junto aos meus caroneiros.

Fluxo:
  1. Motorista clica na opção **Motorista**;
  2. O aplicativo gera um QR Code para ser lido pelos caroneiros;
  3. Motorista clica em **Compartilhar localização** para validar a localização.

![Motorista](https://github.com/danilosalvador/carpool-confirmer/blob/master/Files/Screenshot/Motorista.png?raw=true)

### Exibição do QRCODE: 

A imagem deve ser exibida no modo Motorista e deve conter informações do dia e do motorista. 

### Leitura do QRCODE: 

A leitura do QRcode deve aparecer no modo Caroneiro e deve capturar as informações de data e id do motorista. 
Após a leitura, deve aparecer a tela de compartilhamento de localização.

## Tela de Confirmação - Caroneiro

Como caroneiro, devo confirmar que peguei carona com o motorista.

Fluxo:
  1. Caroneiro clica na opção **Caroneiro**;
  2. O aplicativo exibe a câmera do celular;
  3. Caroneiro aproxima o celular do celular do motorista e lê o QR Code;
  4. Caroneiro clica em Compartilhar localização para validar a localização.
  5. O aplicativo confirma e registra a carona.

![Caroneiro](https://github.com/danilosalvador/carpool-confirmer/blob/master/Files/Screenshot/Caroneiro.png?raw=true)

## Requisitos:
  - Aplicativo Android React Native;
  - Usado o Firebase como backend, sendo Realtime como banco de dados e Functions para a simulação de API

## Confirmação de Carona:
  - Motorista deve ter ao menos 1 caroneiro
  - Caroneiro e motorista devem estar no mesmo raio de proximidade ao confirmar localização.

## Vídeos

![Caroneiro](https://github.com/danilosalvador/carpool-confirmer/blob/master/Files/Screenshot/Caroneiro.png?raw=true)
