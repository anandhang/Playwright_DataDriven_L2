import * as fs from 'fs';

export function getCSVData(filePath: string){
    const csvText = fs.readFileSync(filePath, 'utf-8');
    const lines=csvText.split('\n');
    const header=lines[0].split(',');
    const csvdata = lines
        .slice(1)
        .filter((line:string)=>line.trim()!=='')
        .map((line:string)=>{
            const value = line.split(',');
            const obj:any={};
            header.forEach((header:string,index:number)=>{
                obj[header]=value[index];
            });
        return obj;
    });
    return csvdata;
}

/* 
export function getCSVData1(filePath: string) {
  const csvText = fs.readFileSync(filePath, "utf-8"); 
  const lines = csvText.split("\n");                
  const header = lines[0].split(",");

  const records = lines
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const values = line.split(",");
      const obj: any = {};
      header.forEach((h, index) => {
        obj[h] = values[index];
      });
      return obj;
    });

  return records;
}
 */