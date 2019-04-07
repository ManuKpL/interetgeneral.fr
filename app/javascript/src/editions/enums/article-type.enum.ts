export class ArticleType {

  public static readonly ARTICLE     = new ArticleType('ARTICLE',     'AR', 'type-article');
  public static readonly EDITO       = new ArticleType('EDITO',       'ED', 'type-edito');
  public static readonly INFOGRAPHIC = new ArticleType('INFOGRAPHIC', 'IG', 'type-infographic');
  public static readonly INTERVIEW   = new ArticleType('INTERVIEW',   'IV', 'type-interview');

  public readonly name:      string;
  public readonly text:      string;
  public readonly className: string;

  private constructor(name: string, text: string, className: string) {
    this.className = className;
    this.name      = name;
    this.text      = text;
  }

  public toString(): string {
    return this.name;
  }
}
