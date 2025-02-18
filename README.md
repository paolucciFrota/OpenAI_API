A documentação da OpenAI é extremamente confusa e espero que com esse código você possa usar a api como eu consigui nos meus projetos.

Em primeiro momento lembre-se de instalar o node.js e em seguida o openai usando o comando
´´´
npm install openai
´´´
os arquivos vão estar em nodemodules. Se você encontrar problemas na instalação e no uso do npm leia isso daqui: https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5

Em seguida crie um .env com as chaves no seguinte formato
´´´
OPENAI_API_KEY='CHAVE_API'
OPENAI_PROJECT_ID='CHAVE_PROJETO'
OPENAI_ORGANIZATION_ID='CHAVE_ORGANIZAÇÃO'
OPENAI_ASSISTANT_ID='CHAVE_ASSISTENTE'
´´´
Agora é só abrir o terminal e digitar node index.js e a IA irá funcionar.
