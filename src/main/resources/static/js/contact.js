window.addEventListener('change', () => {
  const select = document.querySelector('#ask-select')
  const selected = select.options[select.selectedIndex].text

  if (selected === '의대 컨설팅') {
    const consultSelect = document.querySelector('#consulting-select')
    if (consultSelect !== null) return

    let dynamicSelectTag = ''
    dynamicSelectTag += '<select class="select" id="consulting-select">'
    dynamicSelectTag += '<option selected>세부상담</option>'
    dynamicSelectTag += '<option value="1" name="통합컨설팅">통합컨설팅</option>'
    dynamicSelectTag += '<option value="2" name="단기컨설팅">단기컨설팅</option>'
    dynamicSelectTag += '<option value="3" name="인터뷰/에세이컨설팅">인터뷰/에세이컨설팅</option>'
    dynamicSelectTag += '</select>'

    select.insertAdjacentHTML('afterend', dynamicSelectTag)
  } else {
    const consultSelect = document.querySelector('#consulting-select')
    if (consultSelect === null) return
    consultSelect.remove()
  }
})
