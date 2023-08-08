export class BookDTO {
  id: number;
  title: string;
  author: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}
