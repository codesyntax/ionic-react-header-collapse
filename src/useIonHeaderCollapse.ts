import { useEffect, useRef } from 'react'

export type UseIonHeaderCollapseResult = {
  ref: React.RefObject<any>
}

export type UseIonHeaderCollapse = {
  marginBottom?: number
  openSpeedRate?: number
  closeSpeedRate?: number
}

export const useIonHeaderCollapse = ({
  marginBottom = 2,
  openSpeedRate = 8,
  closeSpeedRate = 4
}: UseIonHeaderCollapse): UseIonHeaderCollapseResult => {
  const ref: React.RefObject<any> = useRef<any>(null)
  useEffect(() => {
    setTimeout(() => initElements(), 300)
  }, [ref])
  const initElements = () => {
    if (ref && ref.current) {
      const header = ref.current
      const parentElement = header.parentElement
      if (!parentElement) throw new Error('No IonPage parent element')
      const ionContent = parentElement.querySelector('ion-content')
      if (!ionContent)
        throw new Error(
          'Parallax requires an <ion-content> element on the page to work.'
        )
      const scrollContent = ionContent.shadowRoot?.querySelector(
        '.inner-scroll'
      ) as HTMLElement
      if (!scrollContent) {
        throw new Error(
          'Parallax directive requires an <ion-content> element on the page to work.'
        )
      }
      if (scrollContent) {
        const ionHeader = parentElement.querySelector(
          'ion-header'
        ) as HTMLElement
        // On scroll
        let previousScrollTop = 0
        const contentHeight = ionHeader.scrollHeight + marginBottom
        let scrollProcess = 0
        scrollContent.addEventListener('scroll', (_e) => {
          const scrollTop = scrollContent.scrollTop
          if (scrollTop > previousScrollTop) {
            // Scroll down
            if (scrollProcess < contentHeight) {
              scrollProcess += closeSpeedRate
              ionHeader.style.setProperty('bottom', `${scrollProcess}px`)
            }
          } else {
            // Scroll up
            if (scrollProcess > 0) {
              scrollProcess -= openSpeedRate
              // If scrollProcess is less than 0, set it to 0
              scrollProcess = scrollProcess < 0 ? 0 : scrollProcess
              ionHeader.style.setProperty('bottom', `${scrollProcess}px`)
            }
          }
          previousScrollTop = scrollTop
        })

        // On click
        // scrollContent.addEventListener('click', (_e) => {
        //     // setActive(!active);
        //     active = !active;
        //     if(active){
        //         ionHeader.style.setProperty('bottom', `${0}px`);
        //     }else{
        //         ionHeader.style.setProperty('bottom', `${ionHeader.scrollHeight +10}px`);
        //     }
        // });
      }
    }
  }

  return {
    ref
  }
}
