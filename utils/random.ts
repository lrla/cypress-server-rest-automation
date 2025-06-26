/**************************** AUTOMAÇÃO *********************************************************************
 ************************************************************************************************************ 
 Descrição: Funções randômicas e utilitárias
 Autor(a):  Letícia Andrade
************************************************************************************************************ 
*************************************************************************************************************/

/**Add commentMore actions
 * Gerar de forma aleatória números inteiros
 */
export function randomInt(length: number, characters?: string): string {
  let result = '';
  if (!characters) characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function randomDate(date1:  any, date2: any){
  function randomValueBetween(min: any, max: any) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || '01-01-1970'
  var date2 = date2 || new Date().toLocaleDateString()
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
      return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
  } else{
      return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

  }
}

/**
* Gerar de forma aleatória uma String
*/
export function randomString(length: number, characters?: string): string {
  let result = '';
  if (!characters) characters = 'ABCDEGHILMNOPRSTUVabcdeghilmnoprstuv';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
* Gerar preço
*/
export function getRandomPrice(min = 100, max = 1000, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  const random = Math.random() * (max - min) + min;
  return Math.round(random * factor) / factor;
}