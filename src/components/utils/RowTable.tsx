type Props = {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    birthDate: string;
    street: string;
    city: string;
    state: string;
    zip: string;
};

const RowTable = (props: Props) => {
    return (
        <>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.startDate}</td>
        <td>{props.department}</td>
        <td>{props.birthDate}</td>
        <td>{props.street}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zip}</td>
        </>
    )
}

export default RowTable;