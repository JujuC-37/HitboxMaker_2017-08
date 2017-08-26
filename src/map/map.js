import "./map.css";

const $map = document.getElementById('map');

const mapProperties = {
    lines: 8,
    columns: 12
};

export function displayMap() {
    let content = `<table>`;
    let linesArray = Array(mapProperties.lines).fill(1);
    let columnsArray = Array(mapProperties.columns).fill(1);

    content = `<table>${linesArray
        .map( (_, l) => `
            <tr>
                ${columnsArray
                    .map( (_, c) => `<td class="tile line_${l} column_${c}">abc</td>`)
                    .join('')}
            </tr>`)
        .join('')}
        </table>`;

    content += `</table>`;
    $map.innerHTML = content;
}