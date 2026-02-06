export const filterFavo = (booklist )=>{
    return booklist.filter( book=>book.getFavorite())
}

export const sortList = (booklist, value)=>{
        const clone = [...booklist]
        
    if (value == "azT"){
        clone.sort((a, b)=> a.getTitle().localeCompare(b.getTitle()))
    } else if(value == "zaT"){
        clone.sort((a, b)=> b.getTitle().localeCompare(a.getTitle()))
    }else if (value == "azF"){
        clone.sort((a, b)=> a.getAuthor().localeCompare(b.getAuthor()))
    } else if(value == "zaF"){
        clone.sort((a, b)=> b.getAuthor().localeCompare(a.getAuthor()))
    }if (value == "TB"){
    } else if(value == "BT"){
        clone.reverse()
    } 
    return clone
}