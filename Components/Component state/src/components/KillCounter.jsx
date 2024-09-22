export default function KillCounter(props) {
    // console.log(props.count);
    let title = 'Kill Counter';
    //conditional rendering
    if (props.count == 1) {
        return <h3>First Blood!</h3>;
    }

    if (props.count == 2) {
        title = 'Double kill!';
    }

    if (props.count > 5) {
        title = 'Unstoppable!';
    } else if (props.count > 3) {
        title = 'Multi kill!';
    }

    return (
        <>
            {props.count == 3 ? (
                (title = <h3>Triple Kill!</h3>)
            ) : (
                <h3>{title}</h3>
            )}
        </>
    );
}
