# Guia de Comandos Essenciais do Prisma (Mastermind)

Este arquivo é um guia de referência rápida para os comandos do Prisma mais utilizados neste projeto.

---

## 🏛️ Gerenciando a Estrutura do Banco (Schema)

Use estes comandos quando você alterar o arquivo `schema.prisma`.

### `prisma migrate dev`
Este é o comando principal para aplicar mudanças na estrutura do banco. Ele cria um histórico da alteração (migration) e atualiza o Prisma Client.
**Quando usar:** Para toda mudança "oficial" e permanente na estrutura do banco.

```bash
npx prisma migrate dev --name "nome_descritivo_da_mudanca"
```

### `prisma db push`
Sincroniza o banco com o schema rapidamente, **sem** criar um arquivo de histórico.
**Quando usar:** Perfeito para a fase de prototipação, quando você está testando modelos e não quer gerar um histórico poluído.

```bash
npx prisma db push
```

---

## 📊 Interagindo com os Dados

### `prisma studio`
Abre uma interface gráfica no seu navegador para visualizar e editar os dados do seu banco.
**Quando usar:** O tempo todo! É a melhor ferramenta para debugar e verificar se seus dados foram salvos corretamente.

```bash
npx prisma studio
```

### `prisma db seed`
Executa o script em `src/prisma/seed.ts` para popular o banco com dados iniciais de teste.
**Quando usar:** Após um `migrate reset` ou sempre que precisar de um conjunto de dados limpo para começar os testes.

```bash
npx prisma db seed
```

---

## 🔄 Reset e Workflow de Desenvolvimento

### `prisma migrate reset`
O "botão de reset". Apaga o banco, recria a estrutura do zero e aplica todas as migrations existentes.
**Quando usar:** Quando o banco ficar inconsistente e você precisar de um recomeço total.

```bash
npx prisma migrate reset
```

### `prisma generate --watch`
Fica "vigiando" o `schema.prisma` e atualiza os tipos do Prisma Client automaticamente a cada salvamento.
**Quando usar:** Deixe rodando em um segundo terminal durante o desenvolvimento para ter o melhor autocomplete e segurança de tipos no seu código TypeScript.

```bash
npx prisma generate --watch
```