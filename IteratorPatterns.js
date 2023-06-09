const table=[1, 0.2, "other", false, 4]

function Iterator(item){
    this.item=item;
    this.index=0;
}

Iterator.prototype={
    hasNext:function(){
        return this.index < 4
    },
    next:function(){
        return this.item[(this.index)++];
    }

}

const iterator = new Iterator(table);

while(iterator.hasNext()){
    console.log(iterator.next())
}