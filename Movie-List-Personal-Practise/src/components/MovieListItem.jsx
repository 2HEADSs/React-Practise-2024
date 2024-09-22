export default function MovieListItem(props) {
    return (
        <li>
            <a href={props.url || '#'} target="_blank">
                {props.children || props.title}
            </a>
        </li>
    );
}
