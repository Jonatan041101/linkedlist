import { nodoLinkedlist } from "./nodos.js"
import { d } from "./utils/variables.js"

const $linkedist = d.querySelector('.linkedlist')
const $ul = d.querySelector('.linkedlist__ul')
const $input = d.querySelector('.config__ad') as HTMLInputElement
const $inputD = d.querySelector('.config__del') as HTMLInputElement
const $add = d.querySelector('.config__add')
const $delete = d.querySelector('.config__delete')
const $deleteAll = d.querySelector('#delete-all')
const $inputDelete = d.querySelector('#delete-value') as HTMLInputElement

function addNode() {
 const value = $input?.value
 const $lastChild = $ul?.lastChild

 const $liValue = nodoLinkedlist(value,true)
 
 if ($lastChild) {
   $ul.insertBefore($liValue,$lastChild)
 }
 if (!$lastChild) {
 $ul?.appendChild($liValue)
 const $liNull = nodoLinkedlist('null',false)
 $ul?.appendChild($liNull)
 }
 
}

function deleteNode() {
 const id = $inputD.value
 
 const $node = d.getElementById(`${id}`)
 
 $node?.remove()
 if (
  $ul?.firstChild?.firstChild?.textContent === 'null'
 ) {
 const $null = $ul?.firstChild
  $ul?.removeChild($null)
 }
}
function deleteNodes() {
 const value = $inputDelete.value
 const $allNodesDelete:ChildNode[] = [] 
 const $lis = d.querySelectorAll('.linkedlist__li')
 
 $lis.forEach(($li) => {
  if ($li.firstChild) {
   const valueContent = $li.firstChild.textContent?.split('I')[0]
   if (valueContent === value) {
    $allNodesDelete.push($li)
  }  
 }
 })

 $allNodesDelete.forEach(($li) => {
  $li.remove()
 })
 if ($ul?.firstChild?.textContent === 'null') {
  const $null = $ul.firstChild
  $ul.removeChild($null)
 }
}

$add?.addEventListener('click',addNode)
$delete?.addEventListener('click', deleteNode)
$deleteAll?.addEventListener('click',deleteNodes)