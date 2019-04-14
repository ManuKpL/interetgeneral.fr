export class AccessStatus {

  public static readonly COMPLETE = new AccessStatus('COMPLETE', 'article-content-complete');
  public static readonly PARTIAL  = new AccessStatus('PARTIAL', 'article-content-partial');

  private constructor(
    private _status:    string,
    private _className: string,
  ) {}

  public static valueOf(status: string): AccessStatus {
    if (status === 'COMPLETE') {
      return AccessStatus.COMPLETE;
    }

    return AccessStatus.PARTIAL;
  }

  get status(): string {
    return this._status;
  }

  get className(): string {
    return this._className;
  }
}
