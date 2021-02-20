export class SideNav {
  name!: string;
  idx?: string;
  icon?: string;
  show?: boolean;
  route?: string;
  childs?: Array<SideNav>;
  canRemove?: boolean;
}
