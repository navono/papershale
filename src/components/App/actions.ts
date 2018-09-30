import { PaperScope } from 'paper';


export const updatePaper = (paper: PaperScope) => {
  return {
    type: 'UPDATE_PAPER_SCOPE',
    data: paper,
  }
}
