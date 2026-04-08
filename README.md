# Amanda Silvestre — Cartão de Visita Digital

Site profissional para Analista Financeira. Desenvolvido com React + TypeScript + Vite + Tailwind CSS.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

---

## Personalizar para outro cliente

Todo o conteúdo está centralizado em:

```
src/content/content.ts
```

Edite apenas esse arquivo: nome, contatos, serviços, experiência, habilidades e textos de SEO.

---

## Deploy no GitHub Pages

### 1. Crie um repositório no GitHub

Ex: `github.com/seu-usuario/my-resume`

### 2. Ajuste o `base` no Vite

Em `vite.config.ts`, altere para o nome do seu repositório:

```ts
base: '/my-resume/',
```

Se usar domínio customizado, use `base: '/'`.

### 3. Adicione o remote e faça push

```bash
git init
git add .
git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/silvestreamanda/my-resume.git
git push -u origin main
```

### 4. Deploy com gh-pages

```bash
npm run deploy
```

Isso roda o build e publica a pasta `dist` no branch `gh-pages`.

### 5. Ative o GitHub Pages

No repositório → Settings → Pages → Source: `gh-pages` branch → `/root`

Seu site estará em:

```
https://silvestreamanda.github.io/my-resume/
```

---

## Stack

| Tecnologia         | Versão |
| ------------------ | ------ |
| React              | 18     |
| TypeScript         | 5      |
| Vite               | 5      |
| Tailwind CSS       | 3      |
| Framer Motion      | 11     |
| Lucide React       | latest |
| react-helmet-async | 2      |
| gh-pages           | 6      |

---

## Estrutura

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx        # Botão reutilizável
│   │   └── SectionTitle.tsx  # Título de seção com animação
│   ├── FloatingWhatsApp.tsx  # Botão flutuante do WhatsApp
│   └── Navbar.tsx            # Navbar com menu mobile
├── sections/
│   ├── Hero.tsx       # Banner principal com CTAs
│   ├── About.tsx      # Sobre mim + stats
│   ├── Services.tsx   # Cards de serviços
│   ├── Experience.tsx # Timeline de experiência/formação
│   ├── Skills.tsx     # Barras de habilidades + soft skills
│   ├── CTA.tsx        # Chamada para ação final
│   └── Footer.tsx     # Rodapé
├── content/
│   └── content.ts     # ← EDITE AQUI para personalizar
├── App.tsx            # Composição das seções + SEO
└── main.tsx           # Ponto de entrada
```
