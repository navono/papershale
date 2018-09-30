export default class Tools {
  private toolList: any[];

  public registerTool = (tool: any) => {
		this.toolList.push(tool);
  };
  
  public getToolList = () => {
    return this.toolList;
  }
}