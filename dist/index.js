import { nodoLinkedlist } from "./nodos.js";
import { d } from "./utils/variables.js";
const $linkedist = d.querySelector('.linkedlist');
const $ul = d.querySelector('.linkedlist__ul');
const $input = d.querySelector('.config__ad');
const $inputD = d.querySelector('.config__del');
const $add = d.querySelector('.config__add');
const $delete = d.querySelector('.config__delete');
const $deleteAll = d.querySelector('#delete-all');
const $inputDelete = d.querySelector('#delete-value');
function addNode() {
    const value = $input === null || $input === void 0 ? void 0 : $input.value;
    const $lastChild = $ul === null || $ul === void 0 ? void 0 : $ul.lastChild;
    const $liValue = nodoLinkedlist(value, true);
    if ($lastChild) {
        $ul.insertBefore($liValue, $lastChild);
    }
    if (!$lastChild) {
        $ul === null || $ul === void 0 ? void 0 : $ul.appendChild($liValue);
        const $liNull = nodoLinkedlist('null', false);
        $ul === null || $ul === void 0 ? void 0 : $ul.appendChild($liNull);
    }
}
function deleteNode() {
    var _a, _b;
    const id = $inputD.value;
    const $node = d.getElementById(`${id}`);
    $node === null || $node === void 0 ? void 0 : $node.remove();
    if (((_b = (_a = $ul === null || $ul === void 0 ? void 0 : $ul.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent) === 'null') {
        const $null = $ul === null || $ul === void 0 ? void 0 : $ul.firstChild;
        $ul === null || $ul === void 0 ? void 0 : $ul.removeChild($null);
    }
}
function deleteNodes() {
    var _a;
    const value = $inputDelete.value;
    const $allNodesDelete = [];
    const $lis = d.querySelectorAll('.linkedlist__li');
    $lis.forEach(($li) => {
        var _a;
        if ($li.firstChild) {
            const valueContent = (_a = $li.firstChild.textContent) === null || _a === void 0 ? void 0 : _a.split('I')[0];
            if (valueContent === value) {
                $allNodesDelete.push($li);
            }
        }
    });
    $allNodesDelete.forEach(($li) => {
        $li.remove();
    });
    if (((_a = $ul === null || $ul === void 0 ? void 0 : $ul.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) === 'null') {
        const $null = $ul.firstChild;
        $ul.removeChild($null);
    }
}
$add === null || $add === void 0 ? void 0 : $add.addEventListener('click', addNode);
$delete === null || $delete === void 0 ? void 0 : $delete.addEventListener('click', deleteNode);
$deleteAll === null || $deleteAll === void 0 ? void 0 : $deleteAll.addEventListener('click', deleteNodes);
