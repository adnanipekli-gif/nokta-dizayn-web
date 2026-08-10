<?xml version="1.0" encoding="UTF-8"?>
<!-- Nokta Dizayn — sitemap.xsl · site haritasının tarayıcıda okunaklı görünümü (Google bunu görmez, ham XML'i okur) -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="tr">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Nokta Dizayn — Site Haritası</title>
<style>
  body{background:#071B34;color:#E9EEF3;font-family:-apple-system,Segoe UI,Roboto,sans-serif;margin:0;padding:32px}
  .wrap{max-width:1200px;margin:0 auto}
  h1{font-size:22px;margin:0 0 6px;font-weight:700;letter-spacing:.2px}
  h1 span{color:#11B5FF}
  p.sub{color:rgba(233,238,243,.55);font-size:12.5px;margin:0 0 22px}
  .badge{display:inline-block;background:rgba(17,181,255,.12);color:#11B5FF;border:1px solid rgba(17,181,255,.3);border-radius:6px;padding:1px 8px;font-size:11px;font-weight:600}
  table{width:100%;border-collapse:collapse;font-size:12.5px}
  th{text-align:left;color:#11B5FF;letter-spacing:1px;font-size:10.5px;text-transform:uppercase;padding:9px 10px;border-bottom:2px solid rgba(233,238,243,.15)}
  td{padding:8px 10px;border-bottom:1px solid rgba(233,238,243,.08);vertical-align:top}
  tr:hover td{background:rgba(17,181,255,.05)}
  a{color:#E9EEF3;text-decoration:none}
  a:hover{color:#11B5FF}
  .dim{color:rgba(233,238,243,.5);font-size:11px;white-space:nowrap}
  .langs a{display:inline-block;margin:0 5px 3px 0;font-size:10px;color:#11B5FF;border:1px solid rgba(233,238,243,.15);border-radius:4px;padding:1px 5px}
  .langs a:hover{border-color:#11B5FF}
  footer{margin-top:24px;color:rgba(233,238,243,.35);font-size:11px}
</style>
</head>
<body>
<div class="wrap">
  <h1>Nokta <span>Dizayn</span> — Site Haritası</h1>
  <p class="sub">Toplam <span class="badge"><xsl:value-of select="count(sm:urlset/sm:url)"/> URL</span> · Bu sayfa insan gözü içindir; arama motorları ham XML'i okur. Çok dilli sürümler hreflang ile işaretlidir.</p>
  <table>
    <tr><th>Adres</th><th>Dil Sürümleri</th><th>Güncelleme</th><th>Sıklık</th><th>Öncelik</th></tr>
    <xsl:for-each select="sm:urlset/sm:url">
    <tr>
      <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
      <td class="langs">
        <xsl:for-each select="xhtml:link[@hreflang!='x-default']">
          <a href="{@href}"><xsl:value-of select="@hreflang"/></a>
        </xsl:for-each>
      </td>
      <td class="dim"><xsl:value-of select="substring(sm:lastmod,1,10)"/></td>
      <td class="dim"><xsl:value-of select="sm:changefreq"/></td>
      <td class="dim"><xsl:value-of select="sm:priority"/></td>
    </tr>
    </xsl:for-each>
  </table>
  <footer>Nokta Dizayn — noktadizayn.com.tr</footer>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
