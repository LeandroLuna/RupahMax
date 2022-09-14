# RupahMax

## Um pouco mais sobre o projeto..
É de senso comum os problemas correntes no sistema de saúde brasileiro. Em vista disso, a construção desse projeto tenciona em contribuir com um aumento da qualidade e agilidade de um dos procedimentos mais primordias em hospitais, seja público ou privado, a triagem.

Assim sendo, o presente repositório tem por finalidade reunir o código de um dashboard médico à ser desenvolvido pela equipe de Iniciação Cientifica 2022, orientada pelo professor Hellyson Cássio, para visualização rápida dos principais métricas relevantes para médicos e enfermeiros, em prol de processos específicos em proveito aos pacientes.

## Construção
A arquitetura do dashboard está sendo construida com apoio do framework Angular e os componentes gráficos da biblioteca Nebular, com sua principal inspiração conceitual aos templates do dashboard 'ngx-admin'.

Para armazenamento e tratativas de dados, conta-se com uma estrutura MQTT para coleta dos dados providos do robo, em conjunto uma estrutura de banco de dados SQL da AWS, a saber: AWS IOT (serviços em nuvem para projetos IoT) , Kinesis Streams e Lambda (tratamento dos dados), AWS RDS MySQL (armazenamento) e instâncias EC2 (servidor utilizado para ser feita a distruibuição HTTP). 
