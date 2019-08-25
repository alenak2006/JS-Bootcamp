Article.count = 0;
function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
}
Article.showStats = function () {
    return this.count + ' ' + this.last;
}

let a = new Article();
let b = new Article();

Article.showStats();
let c = new Article();

Article.showStats();