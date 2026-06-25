/* 공통 스크립트 — 콘텐츠 페이지의 테마 토글 · 현재 메뉴 표시 · 연도 */
(function(){
  // 테마 (index.html과 동일한 localStorage 키 사용)
  var KEY = 'grade-theme';
  var root = document.documentElement;
  function saved(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function prefersDark(){ return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches; }
  var btn = document.getElementById('themeToggle');
  function setTheme(t){
    root.setAttribute('data-theme', t);
    if(btn){ btn.textContent = t==='dark' ? '☀️' : '🌙'; btn.title = (t==='dark'?'라이트':'다크') + ' 모드로 전환'; }
    try{ localStorage.setItem(KEY, t); }catch(e){}
  }
  setTheme(saved() || (prefersDark() ? 'dark' : 'light'));
  if(btn){
    btn.addEventListener('click', function(){
      setTheme(root.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
    });
  }

  // 현재 페이지 메뉴 강조
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav .nav-links a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === here) a.classList.add('active');
  });

  // 푸터 연도
  var y = document.getElementById('year');
  if(y){ /* 빌드 시점 고정 연도 */ y.textContent = y.textContent || '2026'; }
})();
