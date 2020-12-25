import React from 'react';
type typeImageListProps = {
  raneItems: any[]
}

class ImageList extends React.Component<typeImageListProps> {
  listItems = (itemsArrays: any) => {
    return(
      <div className="flex">
        {itemsArrays.map((items: any, i: number) => {
          return (
            <div className="flex flex-col" key={i}>
              {items.map((item: any, j: number) => {
                return (
                  <div className="max-w-xs m-1" key={j} >
                    <ListItem url={item.url} source={item.source}/>
                  </div>
                );
                })}
            </div>
          );
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.listItems(this.props.raneItems)}
      </div>
    );
  }
}
export default ImageList

function ListItem(props: any) {
  return <a href={props.source} target="_blank" rel="noopener noreferrer"><img src={props.url} alt=""/></a>;
}
