function para(number) {
    inp.value+=number
}
function clean() {
    inp.value=""
}
function backSpace() {
    inp.value=inp.value.slice(0,-1)
}
function result() {
    inp.value=eval(inp.value)
}