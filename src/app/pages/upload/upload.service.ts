import {Injectable} from "@angular/core";

@Injectable()
export class UploadService{
  constructor(){}
  init_options = [
    {
      value: 'subject1',
      label: '科目一',
    children:
      [
        {
          value: 'chapter1',
          label: '章节一',
          isLeaf: true
        },
        {
          value: 'chapter2',
          label: '章节二',
          isLeaf: true
        },
        {
          value: 'chapter3',
          label: '章节三',
          isLeaf: true
        },
    ],
  },


    {
      value: 'subject2',
      label: '科目二',
      children: [
        {
          value: 'chapter1',
          label: '章节一',
          isLeaf: true
        }
      ],
    }
  ];
}
