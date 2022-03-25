import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// Create HTML
const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt elit augue, a scelerisque magna elementum tempus. Etiam at ultrices ex. Nunc eu dignissim tellus, at varius ligula. Morbi a lectus nec magna pharetra euismod eget nec lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec tincidunt ipsum. Aliquam semper elit et urna ultrices, quis mattis odio lacinia.
<br/><br/>
Donec iaculis bibendum viverra. Pellentesque ut ligula faucibus, volutpat lacus ut, aliquet ante. Aenean quis pellentesque risus, non vehicula massa. Aliquam a turpis sem. Aliquam et ante et magna blandit mattis. Phasellus cursus non velit sit amet luctus. Duis ac dui sit amet enim finibus gravida vitae ut est. Etiam nisl sapien, tincidunt sit amet iaculis vitae, tincidunt a magna. Suspendisse suscipit, ante eu elementum iaculis, purus nisi tempus risus, nec tincidunt turpis libero sit amet justo. In varius nulla nec quam faucibus, a suscipit nibh condimentum. Morbi posuere libero vitae nulla pretium blandit. Aliquam sed aliquam ipsum. Sed semper lorem vitae mi rutrum scelerisque. Nunc sagittis nulla sed erat fringilla bibendum at ac velit. Phasellus nec nisi eu est vulputate eleifend ut id urna.
<br/><br/>
Aenean molestie, odio vel eleifend volutpat, enim ligula sodales nulla, ut volutpat sem nibh ac neque. Nam sit amet mattis augue. Donec faucibus congue ultricies. Vivamus interdum, nisl in dignissim commodo, tellus ante blandit justo, sit amet egestas odio urna convallis felis. Quisque malesuada vehicula urna, sit amet lacinia libero semper at. Curabitur mollis sem quam, sit amet semper orci efficitur eu. Ut fermentum, diam a dignissim fringilla, mauris leo porta augue, id gravida odio turpis at dolor. Pellentesque eget ullamcorper est, eu dapibus elit. Sed sit amet tellus egestas, tincidunt felis eget, molestie libero. In hac habitasse platea dictumst. Nam id lorem elit. Mauris pretium sagittis felis, a interdum turpis consectetur vitae. Aliquam erat volutpat. Ut pretium, risus vel molestie imperdiet, arcu diam varius nibh, vel laoreet velit nisl nec enim. Suspendisse luctus, lectus et molestie condimentum, libero turpis finibus augue, vel fringilla ante massa eu sem. Fusce in orci vel arcu mattis consequat.
<br/><br/>
Morbi et ornare sapien. Quisque laoreet eget sem imperdiet pretium. Nam placerat blandit efficitur. Phasellus ipsum sem, volutpat in ligula eget, iaculis pretium augue. Duis laoreet porttitor elit, eu semper dolor tempor nec. Integer dapibus urna justo, in tincidunt felis placerat vitae. Aliquam placerat laoreet sollicitudin. Phasellus ante lorem, tempor eget neque vitae, egestas maximus sem. Morbi vitae semper elit, at accumsan velit. Donec semper volutpat nibh, nec fermentum enim lobortis vulputate. Duis iaculis ornare bibendum. Sed porta egestas augue at commodo. Suspendisse sed nulla mauris. Ut scelerisque vitae nisi eget vulputate. Suspendisse potenti.
<br/><br/>
Aenean vel laoreet libero. Curabitur eu sollicitudin leo. Ut vel massa in odio mollis posuere. Nunc et odio vitae purus euismod placerat posuere eget metus. Maecenas enim ligula, aliquam at mollis at, pretium ac erat. In nisl justo, posuere eu tristique nec, viverra at justo. Nam magna eros, fermentum a lorem rutrum, semper efficitur ligula. Suspendisse vitae ornare tortor. Nullam placerat mauris sem, at tincidunt tortor laoreet in.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt elit augue, a scelerisque magna elementum tempus. Etiam at ultrices ex. Nunc eu dignissim tellus, at varius ligula. Morbi a lectus nec magna pharetra euismod eget nec lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec tincidunt ipsum. Aliquam semper elit et urna ultrices, quis mattis odio lacinia.
<br/><br/>
Donec iaculis bibendum viverra. Pellentesque ut ligula faucibus, volutpat lacus ut, aliquet ante. Aenean quis pellentesque risus, non vehicula massa. Aliquam a turpis sem. Aliquam et ante et magna blandit mattis. Phasellus cursus non velit sit amet luctus. Duis ac dui sit amet enim finibus gravida vitae ut est. Etiam nisl sapien, tincidunt sit amet iaculis vitae, tincidunt a magna. Suspendisse suscipit, ante eu elementum iaculis, purus nisi tempus risus, nec tincidunt turpis libero sit amet justo. In varius nulla nec quam faucibus, a suscipit nibh condimentum. Morbi posuere libero vitae nulla pretium blandit. Aliquam sed aliquam ipsum. Sed semper lorem vitae mi rutrum scelerisque. Nunc sagittis nulla sed erat fringilla bibendum at ac velit. Phasellus nec nisi eu est vulputate eleifend ut id urna.
<br/><br/>
Aenean molestie, odio vel eleifend volutpat, enim ligula sodales nulla, ut volutpat sem nibh ac neque. Nam sit amet mattis augue. Donec faucibus congue ultricies. Vivamus interdum, nisl in dignissim commodo, tellus ante blandit justo, sit amet egestas odio urna convallis felis. Quisque malesuada vehicula urna, sit amet lacinia libero semper at. Curabitur mollis sem quam, sit amet semper orci efficitur eu. Ut fermentum, diam a dignissim fringilla, mauris leo porta augue, id gravida odio turpis at dolor. Pellentesque eget ullamcorper est, eu dapibus elit. Sed sit amet tellus egestas, tincidunt felis eget, molestie libero. In hac habitasse platea dictumst. Nam id lorem elit. Mauris pretium sagittis felis, a interdum turpis consectetur vitae. Aliquam erat volutpat. Ut pretium, risus vel molestie imperdiet, arcu diam varius nibh, vel laoreet velit nisl nec enim. Suspendisse luctus, lectus et molestie condimentum, libero turpis finibus augue, vel fringilla ante massa eu sem. Fusce in orci vel arcu mattis consequat.
<br/><br/>
Morbi et ornare sapien. Quisque laoreet eget sem imperdiet pretium. Nam placerat blandit efficitur. Phasellus ipsum sem, volutpat in ligula eget, iaculis pretium augue. Duis laoreet porttitor elit, eu semper dolor tempor nec. Integer dapibus urna justo, in tincidunt felis placerat vitae. Aliquam placerat laoreet sollicitudin. Phasellus ante lorem, tempor eget neque vitae, egestas maximus sem. Morbi vitae semper elit, at accumsan velit. Donec semper volutpat nibh, nec fermentum enim lobortis vulputate. Duis iaculis ornare bibendum. Sed porta egestas augue at commodo. Suspendisse sed nulla mauris. Ut scelerisque vitae nisi eget vulputate. Suspendisse potenti.
<br/><br/>
Aenean vel laoreet libero. Curabitur eu sollicitudin leo. Ut vel massa in odio mollis posuere. Nunc et odio vitae purus euismod placerat posuere eget metus. Maecenas enim ligula, aliquam at mollis at, pretium ac erat. In nisl justo, posuere eu tristique nec, viverra at justo. Nam magna eros, fermentum a lorem rutrum, semper efficitur ligula. Suspendisse vitae ornare tortor. Nullam placerat mauris sem, at tincidunt tortor laoreet in.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt elit augue, a scelerisque magna elementum tempus. Etiam at ultrices ex. Nunc eu dignissim tellus, at varius ligula. Morbi a lectus nec magna pharetra euismod eget nec lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec tincidunt ipsum. Aliquam semper elit et urna ultrices, quis mattis odio lacinia.
<br/><br/>
Donec iaculis bibendum viverra. Pellentesque ut ligula faucibus, volutpat lacus ut, aliquet ante. Aenean quis pellentesque risus, non vehicula massa. Aliquam a turpis sem. Aliquam et ante et magna blandit mattis. Phasellus cursus non velit sit amet luctus. Duis ac dui sit amet enim finibus gravida vitae ut est. Etiam nisl sapien, tincidunt sit amet iaculis vitae, tincidunt a magna. Suspendisse suscipit, ante eu elementum iaculis, purus nisi tempus risus, nec tincidunt turpis libero sit amet justo. In varius nulla nec quam faucibus, a suscipit nibh condimentum. Morbi posuere libero vitae nulla pretium blandit. Aliquam sed aliquam ipsum. Sed semper lorem vitae mi rutrum scelerisque. Nunc sagittis nulla sed erat fringilla bibendum at ac velit. Phasellus nec nisi eu est vulputate eleifend ut id urna.
<br/><br/>
Aenean molestie, odio vel eleifend volutpat, enim ligula sodales nulla, ut volutpat sem nibh ac neque. Nam sit amet mattis augue. Donec faucibus congue ultricies. Vivamus interdum, nisl in dignissim commodo, tellus ante blandit justo, sit amet egestas odio urna convallis felis. Quisque malesuada vehicula urna, sit amet lacinia libero semper at. Curabitur mollis sem quam, sit amet semper orci efficitur eu. Ut fermentum, diam a dignissim fringilla, mauris leo porta augue, id gravida odio turpis at dolor. Pellentesque eget ullamcorper est, eu dapibus elit. Sed sit amet tellus egestas, tincidunt felis eget, molestie libero. In hac habitasse platea dictumst. Nam id lorem elit. Mauris pretium sagittis felis, a interdum turpis consectetur vitae. Aliquam erat volutpat. Ut pretium, risus vel molestie imperdiet, arcu diam varius nibh, vel laoreet velit nisl nec enim. Suspendisse luctus, lectus et molestie condimentum, libero turpis finibus augue, vel fringilla ante massa eu sem. Fusce in orci vel arcu mattis consequat.
<br/><br/>
Morbi et ornare sapien. Quisque laoreet eget sem imperdiet pretium. Nam placerat blandit efficitur. Phasellus ipsum sem, volutpat in ligula eget, iaculis pretium augue. Duis laoreet porttitor elit, eu semper dolor tempor nec. Integer dapibus urna justo, in tincidunt felis placerat vitae. Aliquam placerat laoreet sollicitudin. Phasellus ante lorem, tempor eget neque vitae, egestas maximus sem. Morbi vitae semper elit, at accumsan velit. Donec semper volutpat nibh, nec fermentum enim lobortis vulputate. Duis iaculis ornare bibendum. Sed porta egestas augue at commodo. Suspendisse sed nulla mauris. Ut scelerisque vitae nisi eget vulputate. Suspendisse potenti.
<br/><br/>
Aenean vel laoreet libero. Curabitur eu sollicitudin leo. Ut vel massa in odio mollis posuere. Nunc et odio vitae purus euismod placerat posuere eget metus. Maecenas enim ligula, aliquam at mollis at, pretium ac erat. In nisl justo, posuere eu tristique nec, viverra at justo. Nam magna eros, fermentum a lorem rutrum, semper efficitur ligula. Suspendisse vitae ornare tortor. Nullam placerat mauris sem, at tincidunt tortor laoreet in.
`;

const body = document.querySelector('body');
body.append(text);

const progessBar = document.createElement('div');
progessBar.setAttribute('class', 'progress-bar');
body.append(progessBar);

// Functions
const calculateScrollPercentage = (event) => {
	const { clientHeight, scrollHeight, scrollTop } = event.target.documentElement;
	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(map(calculateScrollPercentage));

progress$.subscribe((percentage) => {
	progessBar.style.width = `${percentage}%`;
});
