# Product of Array Except Self

## 1. Link do problema
https://leetcode.com/problems/product-of-array-except-self/

## 2. Plataforma
LeetCode

## 3. Dificuldade
Médio

## 4. Objetivo
Construir um array em que cada posição contém o produto de todos os elementos, exceto o próprio índice.

## 5. Entendimento do enunciado
O problema exige identificar corretamente a lógica central do enunciado e construir uma solução eficiente, priorizando clareza, corretude e boa análise de complexidade.

## 6. Estrutura de dados utilizada
Array + Prefix/Suffix

## 7. Por que essa estrutura é adequada
A técnica de prefixos e sufixos evita o uso de divisão e permite resolver o problema com eficiência linear.

## 8. Estratégia de solução
Construir produtos acumulados da esquerda para a direita e depois multiplicar pelos produtos da direita para a esquerda.

## 9. Passo a passo do raciocínio
1. Interpretar a entrada e identificar a operação principal exigida.
2. Escolher a estrutura de dados mais adequada ao tipo de operação.
3. Aplicar a estratégia de forma iterativa e controlada.
4. Tratar casos de borda.
5. Retornar o resultado esperado no formato solicitado.

## 10. Implementação em JavaScript
A implementação final está no arquivo `solution.js`.

## 11. Complexidade
- Tempo: `O(n)`
- Espaço: `O(1) adicional, desconsiderando o array de saída`

## 12. Versão inicial sugerida pela IA
A IA auxiliou na organização do raciocínio inicial, sugerindo uma solução base compatível com o problema.

## 13. Melhorias feitas pela equipe
A equipe refinou nomes de variáveis, clareza do fluxo, padronização da solução em JavaScript e criação de testes objetivos.

## 14. Testes realizados
Os testes estão no arquivo `test.js` e cobrem:
- caso básico;
- caso de borda;
- caso intermediário;
- caso clássico da plataforma.

## 15. Conclusão
Este problema foi importante para revisar o uso de **Array + Prefix/Suffix** em um contexto clássico de entrevistas técnicas, reforçando análise de eficiência, clareza de implementação e validação por testes.
