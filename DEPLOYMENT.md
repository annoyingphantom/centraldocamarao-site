# Publicação, DNS e e-mail profissional

Este guia documenta o caminho recomendado para publicar o site oficial da Central do Camarão e configurar e-mails institucionais no domínio `centraldocamaraoatacado.com.br`.

## 1. E-mail profissional

Opção rápida e sem custo para receber e-mails: Cloudflare Email Routing.

Contas recomendadas:

- `contato@centraldocamaraoatacado.com.br`
- `comercial@centraldocamaraoatacado.com.br`

Fluxo:

1. Criar uma conta na Cloudflare.
2. Adicionar o domínio `centraldocamaraoatacado.com.br`.
3. Copiar os 2 nameservers informados pela Cloudflare.
4. No Registro.br, trocar os servidores DNS atuais pelos nameservers da Cloudflare.
5. Na Cloudflare, ativar Email Routing.
6. Criar os endereços `contato@centraldocamaraoatacado.com.br` e `comercial@centraldocamaraoatacado.com.br`.
7. Encaminhar os dois endereços para o Gmail da empresa.
8. Confirmar o e-mail de destino pelo link enviado pela Cloudflare.

Observação: Cloudflare Email Routing resolve recebimento e encaminhamento. Para enviar mensagens como `@centraldocamaraoatacado.com.br`, a etapa ideal depois é contratar Google Workspace, Zoho Mail ou outro provedor de e-mail com SMTP/autenticação própria.

## 2. Publicar o site

Caminho simples: GitHub + Vercel.

Crie um repositório no GitHub chamado:

```text
centraldocamarao-site
```

No PC, dentro da pasta do projeto:

```powershell
cd C:\centraldocamarao
git init
git add .
git commit -m "Initial institutional website"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Na Vercel:

1. Entrar na Vercel.
2. Clicar em `Add New Project`.
3. Importar o repositório do GitHub.
4. Clicar em `Deploy`.
5. Ir em `Project > Settings > Domains`.
6. Adicionar:
   - `centraldocamaraoatacado.com.br`
   - `www.centraldocamaraoatacado.com.br`

A Vercel mostrará os registros DNS exatos no painel. Use sempre o painel da Vercel como confirmação final.

## 3. DNS recomendado na Cloudflare

Se a Cloudflare for o DNS principal, configure os registros do site nela.

Domínio raiz:

```text
Tipo: A
Nome: @
Valor: 76.76.21.21
```

Subdomínio www:

```text
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

Os registros de e-mail da Cloudflare Email Routing, incluindo MX e TXT, também devem permanecer no DNS da Cloudflare.

## 4. Checklist antes da verificação Meta

- Site publicado em `https://centraldocamaraoatacado.com.br`.
- `www.centraldocamaraoatacado.com.br` redirecionando corretamente.
- Rodapé exibindo razão social, nome fantasia, CNPJ, endereço, WhatsApp, Instagram e Facebook.
- Páginas de Política de Privacidade e Termos de Uso publicadas.
- E-mail `contato@centraldocamaraoatacado.com.br` funcionando para recebimento.
- WhatsApp oficial funcionando em `https://wa.me/5591980985447`.
- Instagram e Facebook oficiais acessíveis.
- Google Business Profile: https://maps.app.goo.gl/j6QXoTCrVLm4bggC8
