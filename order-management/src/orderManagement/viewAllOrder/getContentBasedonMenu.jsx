import { defaultHeaderdata, defaultRowData } from "../defaultData";
import { DeleteIcon, EditIcon } from "../icons";
export const GetContentBasedonMenu = (
  activeIndexMenu,
  headerdata = defaultHeaderdata,
  rowData = defaultRowData,
  setRowData,
) => {
  switch (activeIndexMenu) {
    case 0:
      return (
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                {headerdata?.map((header) => (
                  <th key={header.name}>{header?.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData?.map((row,index) => {
                return (
                  <tr key={row?.id}>
                    <td>{row?.id}</td>
                    <td>{row?.orderDescription}</td>
                    <td>
                      <div className="countRow">
                        <div
                          className={`countRow ${
                            row?.countOfItemTypes?.Electronics > 0
                              ? "greenBox"
                              : "redBox"
                          }`}
                        >
                          <div>Electronics</div>
                          <div>{row?.countOfItemTypes?.Electronics}</div>
                        </div>
                        <div
                          className={`countRow ${
                            row?.countOfItemTypes?.Groceries > 0
                              ? "greenBox"
                              : "redBox"
                          }`}
                        >
                          <div>Groceries</div>
                          <div>{row?.countOfItemTypes?.Groceries}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {(row.countOfItemTypes.Electronics /
                        (row.countOfItemTypes.Electronics +
                          row.countOfItemTypes.Groceries)) *
                        100 +
                        "%"}
                    </td>
                    <td>{row?.createdBy}</td>
                    <td className="text-center">
                      {row?.createdAt?.substring(0, 10)}
                    </td>
                    <td className="text-center">
                      <div className="countRow justify-se">
                        <div className="pointer">
                          <EditIcon />
                        </div>
                        <div className="pointer" onClick={()=> {
                          const updatedRow = [...rowData];
                          updatedRow.splice(index,1);
                          setRowData(updatedRow);
                        }}>
                          <DeleteIcon />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    case 1:
      return <h2> Menu 2</h2>;
    default:
      return <h2>Order management dashboard</h2>;
  }
};
