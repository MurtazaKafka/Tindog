class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    setMatchStatus(growl){
        this.hasBeenSwiped = true
        this.hasBeenLiked = growl
    }
    
    getDogHtml() {
        const { name, age, avatar, bio } = this
        
        return `<div>
                    <div class="avatar">
                        <img class="profile-image" src=${avatar}>
                    </div>
                    <div class="dog-info">
                        <p><strong>${name}, ${age}<strong><p>
                        <p>${bio}</p>
                    </div>
                </div>`
    }
    
    getApprovedHtml(){
        const { hasBeenLiked, hasBeenSwiped } = this
        
        return `<img class='badge' src='images/badge-like.png'>`
    }
    
    getRejectedHtml(){
        const { hasBeenLiked, hasBeenSwiped } = this
        
        return `<img class='badge' src='images/badge-nope.png'>`
    }
}

export default Dog